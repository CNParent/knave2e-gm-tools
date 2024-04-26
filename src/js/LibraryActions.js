import Dice from './Dice.js';

const roller = new Dice();

let rollOnTable = ({ table, modifier, tables }) => {
    let appliedModifier = modifier;
    if (!table.applyModifiers) appliedModifier = '+0';

    console.log(`Rolling ${table.roll} + ${appliedModifier} on ${table.name}`);
    let roll = roller.roll(table.roll + appliedModifier);
    let max = Math.max(...table.entries.map(x => x.max));
    let min = Math.min(...table.entries.map(x => x.min));
    if (roll > max) roll = max;
    if (roll < min) roll = min;

    let result = table.entries.find(x => x.min <= roll && x.max >= roll);
    if (!result) {
        alert(`Error - rolled ${roll} on table ${table.name} (id: ${table.id})`);
        return;
    }

    let description = result.name;
    if (result.amount) {
        let amount = roller.roll(result.amount);
        description = `${description} (${amount})`;
    }
    
    let results = [{
        roll,
        table: table.name,
        description: description
    }];

    if (!result.tables) return results;

    result.tables.forEach(t => {
        console.log(`finding table with id ${t}`);
        let next = tables.find(x => x.id == t);
        console.log(`found table: ${next.name}`);
        if (!next) {
            results.push({ 
                roll: 0,
                table: null,
                description: `Could not find table with id ${t}`
            });
        }
        else {
            results = results.concat(rollOnTable({ table: next, modifier, tables }));
        }
    });

    return results;
}

export default {
    rollOnTable
}
