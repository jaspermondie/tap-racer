// This JS structure is taken from the following article:
// https://blog.diacode.com/page-specific-javascript-in-phoenix-framework-pt-1

import MainView from "./main"
import TapConsoleView from "./tap/console"
import TapPlayView from "./tap/play"
import TapChatView from "./tap/chat"

// Collection of specific view modules
const views = {
  TapConsoleView,
  TapPlayView,
  TapChatView
}

export default function loadView(viewName) {
  return views[viewName] || MainView
}
