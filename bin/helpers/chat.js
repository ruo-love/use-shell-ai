const { fetchEventSource } = require("@ai-zen/node-fetch-event-source");
const { generateToken } = require("./tool");
async function callZhiPuAi(prompt, api_key) {
  fetchEventSource(
    "https://open.bigmodel.cn/api/paas/v3/model-api/chatglm_turbo/sse-invoke",
    {
      method: "POST",
      openWhenHidden: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: generateToken(api_key),
      },
      body: JSON.stringify({ prompt: [{ role: "user", content: prompt }] }),
      async onopen(e) {},
      onmessage(msg) {
        process.stdout.write(msg.data);
      },
      async onclose() {
        process.stdout.write("\n");
      },
      onerror(err) {
        console.log("err", err);
      },
    }
  );
}
module.exports = {
  callZhiPuAi,
};
