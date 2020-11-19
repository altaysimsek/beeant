
import { auth } from "@/main.js"

export default async (to, from, next) => {
  if (auth.currentUser) {
    next()
  } else {
    next("/")
  }
}