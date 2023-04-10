const { ApplicationCommandOptionType, Client, Interaction } = reguired(`discord.js`);

module.exports = {
    /**
     * @param {Client} client
     * @param {Interaction} interaction
     */
    callback: (client, interaction) => {
        if (!interaction.inGuild()) {}
    },

    name: `autorole-configure`,
    description: "Configure your auto-role for this server.",
    Options: [
        {
            name: "role",
            description: "The role you want users to get on join.",
            type: ApplicationCommandOptionType.Role,
            required: true,
        }
    ],
}