export async function GET() {
  const appUrl = "https://frame-v2-1.vercel.app/";

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOjMwNjIyOSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDQ2NzMzOTdBM0I3MDVkYzNjYUQzNTIzNEY4MDFFMzlkMTM2NGU3ODAifQ",
      payload: "eyJkb21haW4iOiJmcmFtZS12Mi0xLnZlcmNlbC5hcHAifQ",
      signature: "MHg3YzA3MmM1MjYyMzlmZGU5MGUzOWZkMmFmZTFhNWRjNDllOTZlY2RkYjI3MjUyM2QyYzlhNjE1ZmJiY2JiN2JmMTgyOTVkYmMyN2IxNjY0MzRmMTc2YzVhZWM4MWEyOTE1ZjEzZGRhNjNjZTYxYTcwYTU3YzU0N2M0YzY4OGY3MTFj"
    },
    frame: {
      version: "1",
      name: "Mini App Template",
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
