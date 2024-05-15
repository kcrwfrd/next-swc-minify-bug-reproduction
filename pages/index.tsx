import dynamic from 'next/dynamic'

// The downstream agora-rtm-react package contains references to
// the window object, which breaks SSR, so we need to dynamically
// import with `ssr: false` to reproduce the bug.
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
