export const addons = [
  {
    id: 'addon-1',
    title: 'Interactable Items',
    shortDescription: 'Run commands on item use',
    fullDescription: 'This addon allows you to create items that execute commands when used.<br><br>This lets you attach up to 10 commands and a cooldown to any item in the game (including from addons).<br><br>Once in game simply use the command /scriptevent edit:items<br><br>This will open a menu where you can add, edit, and remove the logic from any of your items.',
    downloadUrl: 'https://drive.proton.me/urls/DGG2ZNKSTG#9eTwli6CzKBp'
  },
  {
    id: 'addon-2',
    title: 'Plots',
    shortDescription: 'Quickly setup private plots with guest permissions',
    fullDescription: 'WARNING -<br>This addon is designed for advanced users and is intended to be edited.  While it is usable with the default settings it is strongly discouraged.  That said all following information assumes default settings; if edited adjust to your new values.<br><br>Features-<br>-Fully private plots<br>-Manageable per plot guest list<br>-Plot permission checking (checks rather players have glitched into a plot they shouldnt be in and will teleport them to spawn)<br>&nbsp;&nbsp;(the tag "staff" makes you immune to these checks)<br>-staff controls for plot data and total plots sold<br>-scriptevent control for individual features<br><br>Default Values<br>-Location all space at and past positive 10,000 on the x coordinate<br>-Staff exemption tag "staff"<br>-Plot cost free<br>-Max guests unlimited<br>-Max plots unlimited<br>-mMx owned plots 1<br>-Fully isolated and protected plots.  Are resistant to redstone, boats, water, and more<br><br>Use<br>-All features are run through the /scriptevent command in the format (/scriptevent event:id) where event:id is one of the following<br>&nbsp;&nbsp;(if the command is being run via a command block or npc it will need paired with an "execute as" command.  Ex- execute as @p run scriptevent event:id)<br><br>-plot:menu<br>&nbsp;&nbsp;(predefined menu with all plot functions if you need easy use)<br>-plot:claim<br>&nbsp;&nbsp;(gives the player their plot)<br>-plot:owned<br>&nbsp;&nbsp;(brings the player to their plot)<br>-plot:guest<br>&nbsp;&nbsp;(opens the list of plots the user has guest permissions for)<br>-plot:guests<br>&nbsp;&nbsp;(opens the menu for the player to control guest permissions for their plot)<br>-plot:reset<br>&nbsp;&nbsp;(resets the player plot fully)<br>-plots:data<br>&nbsp;&nbsp;(staff menu for editing plot data)<br><br>Setup and important information<br>-Requires adding a scoreboard called "plot"<br>&nbsp;&nbsp;(/scoreboard objectives add plot dummy)<br>-Again because these two notes are SUPER IMPORTANT<br>&nbsp;&nbsp;1 - This addon will use a lot of space in your world.  By default this is all values past 10,000 on the x coordinate.  Anything at or past this (or whatever you change it to) is at risk of being deleted and unusable<br>&nbsp;&nbsp;2 - When giving a player a plot ensure you add the tag plot_owner to the player.  This prevents possible accidental double claiming and data loss.  Its left off by default for power users.  Example command chain to safely give a player a plot assuming a 500 cost on the money scoreboard<br>&nbsp;&nbsp;- scoreboard players test @p money 500<br>&nbsp;&nbsp;- scoreboard players remove @p money 500<br>&nbsp;&nbsp;- execute as @p unless entity @s[tag=plot_owner] run scriptevent plot:claim<br>&nbsp;&nbsp;- tag @p add plot_owner<br><br>&nbsp;&nbsp;- This chain handles selling, gurantee of no plot data loss, and the ability to only be run succesfully on the player once',
    downloadUrl: 'https://drive.proton.me/urls/C95SZM6HNM#QDAZNQOxwrMg'
  },
  {
    id: 'addon-3',
    title: 'Invisible Deny, Borders and Allow',
    shortDescription: 'Easily hide these ugly admin blocks from view',
    fullDescription: 'This is a resource pack which makes allow, deny, and border blocks (including their particles) completley invisible<br>-Due to limitations with resource packs holding the block will not show you their placed locations.<br>-This pack is recommended for use after building has been finished.',
    downloadUrl: 'https://drive.proton.me/urls/CHZYV1HSSM#uEvVBRSNH0An'
  },
  {
    id: 'addon-4',
    title: 'Player Data Controller',
    shortDescription: 'Edit PvP and health directly with commands',
    fullDescription: 'This will allow you to have better control over players.<br>-Teams - You can use the tags team1 through team5  Players with that have the same team tag cant hit each other.<br>-Anti spawn PvP - Give the tag spawn to stop all damage to the player including mobs, PvP, and any other damage.<br>-Health manipulation - controlled through the /event command allows you to set individual players health from 1 to 50 hearts. Ex - /event entity @s health20<br><br>WARNING - This addon uses player.json to edit these properties.  This means it may not be compatible with every addon.',
    downloadUrl: 'https://drive.proton.me/urls/TD7GBQT7YM#Juh0HuCkPcIU'
  },
  {
    id: 'addon-5',
    title: 'Uncraftable Boats',
    shortDescription: 'Removes the crafting recipe for boats and minecarts',
    fullDescription: 'This addon dosent fully remove boats or minecarts but it does remove their crafting. These buggy additions are frequently used to glitch out of maps, but can still be useful at times.<br>-No boats/minecarts are killed or cleared from the inventory<br>-All boats/minecarts are impossible to craft and removed from the list',
    downloadUrl: 'https://drive.proton.me/urls/VGEZZZSNQC#ZmQRrwukR6IO'
  },
  {
    id: 'addon-6',
    title: 'Server Style PvP',
    shortDescription: 'Mimick the style of PvP on servers such as the Hive',
    fullDescription: 'This is a 3 part addon<br>-Knockback - This edits knockback to be slightly stronger and more floaty<br>-Bow dings - Hitting another player with a bow makes a ding sound effect<br>-Stats - Adds a means to track the kills and deaths of a player.  (scoreboards arent automatically added.  It uses the scores of "death" and "kills")',
    downloadUrl: 'https://drive.proton.me/urls/6YH6ZX5XAG#hzVHoWjxmoU8'
  },
  {
    id: 'more soon',
    title: 'More soon',
    shortDescription: 'Feel free to message me ideas',
    fullDescription: 'Ill be adapting more stuff that people keep asking me for just been busy',
    downloadUrl: '#'
  }
];

