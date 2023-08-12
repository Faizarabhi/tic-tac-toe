const session = null
import { AuthRequiredError } from "@/lib/exceptions"
export default function Home() {
if (!session) throw new AuthRequiredError()
  return (
    <main>
      this is error 
    </main>
  )
}
