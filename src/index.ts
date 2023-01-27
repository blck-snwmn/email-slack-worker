export default {
  async email(message, env, ctx) {
    console.log("test")
    await message.forward(env.FORWARD_EMAIL);
  }
}