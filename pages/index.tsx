import dynamic from 'next/dynamic'

/**
 * The agora-rtm-react package contains references to the window object,
 * which breaks SSR, so we need to dynamically import with `ssr: false` to
 * reproduce the bug.
 *
 * The bug results in the dynamic module silently failing to load. The loader
 * is shown indefinitely, and the component never renders. You won't see any
 * errors in the console. You can use the React Developer Tools to inspect the
 * component, which surfaces a TypeError that is raised downstream in the
 * agora-rtm-react package.
 *
 * The bug only occurs on production builds:
 * ```
 * npm run build
 * npm run start
 * ```
 */

const AgoraClient = dynamic(
  () => import('../components/AgoraClient'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
)

export default function Home() {
  return (
    <div>
      <AgoraClient />
    </div>
  )
}
