const process = require("child_process");

exports.run = async (client, message, args) => {
  if (message.author.id !== "238755131439448074") return;

  message.channel.send("Perae").then((m) => m.delete({ timeout: 500 }));

  process.exec(args.join(""), (error, stdout) => {
    let response = error || stdout;
    message.channel.send(
      response,
      { code: "asciidoc", split: "\n" }.catch((err) =>
        message.channel.send(err)
      )
    );
  });
  return;
};
