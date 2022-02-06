const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chop')
		.setDescription('Replies with Sup!'),
	async execute(interaction) {
		await interaction.reply('Sup!');
	},
};