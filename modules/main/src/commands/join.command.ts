import { command } from "@replikit/commands"
import { eventManager, gameRepository, PlayerController } from "@uno_bot/main"

command("join").handler(context => {
  const controller = new PlayerController(gameRepository, eventManager)
  return controller.join(context.channel.id, context.account)
}).register()