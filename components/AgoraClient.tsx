import {
  createClient as createChatClient,
  RtmClient,
} from 'agora-rtm-react'
import { useRef } from 'react'

const AGORA_APP_ID = 'foo'

const AgoraClient = () => {
  const chatClientRef = useRef<RtmClient>()
  const chatClientInstance = createChatClient(AGORA_APP_ID)

  chatClientRef.current = chatClientRef.current || chatClientInstance()

  return (
    'Hello, world.'
  )
}

export default AgoraClient
