import ScrollingTable from "./ScrollingTable";

export default function CalculatedValues(props) {
    if (props.creature == null) {
        return null;
    }

    // Equation taken from https://ark.fandom.com/wiki/Armor
    // Section entitled "Armor's protection from damage"
    //  damage modifier = 100 / (100 + Armor Coefficient * Armor)
    //  damage taken = damage * damage modifier
    const saddle = 100 / (100 + 4 * (props.saddle || 0));
    const survivor = 100 / (100 + 1 * (props.armor || 0));

    var melee = props.creature.melee.base;
    const melee_level = props.creature.melee.wild;
    var health = props.creature.health.base;
    const health_level = props.creature.health.wild;
    const damage_vs_saddle = props.creature.damage * saddle / 100;
    const damage_vs_survivor = props.creature.damage * survivor / 100;

    var all = [];
    for (var i = 0; i < 256; i++) {
        all.push([
            i,
            Math.floor(health),
            Math.floor(damage_vs_saddle * melee),
            Math.floor(damage_vs_survivor * melee),
        ]);
        health += health_level;
        melee += melee_level;
    }
    return (
        <ScrollingTable data={all} />
    )
}