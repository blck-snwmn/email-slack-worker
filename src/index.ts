
export interface Env {
  WEBHOOK_URL: string
  FORWARD_EMAIL: string
}

export default {
  async email(message: EmailMessage, env: Env, ctx: ExecutionContext) {
    const slack_resp = await fetch(env.WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(
        {
          response_type: "in_channel",
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: message.from
              }
            }
          ]
        }),
    })
    console.log("test")
    await message.forward(env.FORWARD_EMAIL);
  }
}