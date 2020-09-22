import React, { useState } from 'react';

const page = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
};

const container = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '600px',
  maxWidth: '600px',
  backgroundColor: '#333',
  paddingTop: '50px',
  paddingBottom: '50px',
};

const statsStyle = {
  padding: '15px',
  borderRadius: '15px',
}

const playerStyle = {
  backgroundColor: '#ddd',
  ...statsStyle,
};

const enemyStyle = {
  backgroundColor: '#f4eef4',
  ...statsStyle,
};

const App = () => {
  const [player, setPlayer] = useState({
    str: 5,
    def: 5,
    dex: 5,
    lvl: 1,
  });
  const [enemy, setEnemy] = useState({
    str: 5,
    def: 5,
    dex: 5,
    lvl: 1,
  });

  const maxDamage = (str, def) => {
    const dmg = Math.round(str - 9 / 11 * def);
    if (dmg <= 20) {
      return '1-20';
    }
    return dmg;
  };

  const minDamage = (str, def) => {
    const dmg = Math.round(str - 11 / 9 * def);
    if (dmg <= 20) {
      return '1-20';
    }
    return dmg;
  };

  const normalDamage = (str, def) => {
    const dmg = str - def;
    if (dmg <= 0) {
      return 10;
    }
    return dmg;
  };

  const chanceToHit = (dex, def) => (Math.round((dex * 3.5 / def) * 100) / 100);

  const genHp = (lvl) => (5 * (lvl-1) + 50);


  return (
    <div style={page}>
      <div style={container}>
        <div style={playerStyle}>
          <h3>You</h3>
          <div>Level</div>
          <input
            type="number"
            name="player-lvl"
            id="player-lvl"
            value={player.lvl}
            onChange={(e) => setPlayer({ ...player, lvl: e.target.value })}
          />
          <div>STR</div>
          <input
            type="number"
            name="player-str"
            id="player-str"
            value={player.str}
            onChange={(e) => setPlayer({ ...player, str: e.target.value })}
          />
          <div>DEF</div>
          <input
            type="number"
            name="player-def"
            id="player-def"
            value={player.def}
            onChange={(e) => setPlayer({ ...player, def: e.target.value })}
          />
          <div>DEX</div>
          <input
            type="number"
            name="player-dex"
            id="player-dex"
            value={player.dex}
            onChange={(e) => setPlayer({ ...player, dex: e.target.value })}
          />
          <p>{`HP: ${genHp(player.lvl)}`}</p>
          <p>{`max damage output: ${maxDamage(player.str, enemy.def)}`}</p>
          <p>{`min damage output: ${minDamage(player.str, enemy.def)}`}</p>
          <p>{`chance to hit: ${chanceToHit(player.dex, enemy.def)}`}</p>
          <p>{`Avg. turns to kill enemy: ${Math.round(genHp(enemy.lvl) / normalDamage(player.str, enemy.def) * 10) / 10}`}</p>
        </div>
        <div style={enemyStyle}>
          <h3>Enemy</h3>
          <div>Level</div>
          <input
            type="number"
            name="enemy-lvl"
            id="enemy-lvl"
            value={enemy.lvl}
            onChange={(e) => setEnemy({ ...enemy, lvl: e.target.value })}
          />
          <div>STR</div>
          <input
            type="number"
            name="enemy-str"
            id="enemy-str"
            value={enemy.str}
            onChange={(e) => setEnemy({ ...enemy, str: e.target.value })}
          />
          <div>DEF</div>
          <input
            type="number"
            name="enemy-def"
            id="enemy-def"
            value={enemy.def}
            onChange={(e) => setEnemy({ ...enemy, def: e.target.value })}
          />
          <div>DEX</div>
          <input
            type="number"
            name="enemy-dex"
            id="enemy-dex"
            value={enemy.dex}
            onChange={(e) => setEnemy({ ...enemy, dex: e.target.value })}
          />
          <p>{`HP: ${genHp(enemy.lvl)}`}</p>
          <p>{`max damage output: ${maxDamage(enemy.str, player.def)}`}</p>
          <p>{`min damage output: ${minDamage(enemy.str, player.def)}`}</p>
          <p>{`chance to hit: ${chanceToHit(enemy.dex, player.def)}`}</p>
          <p>{`Avg. turns to kill enemy: ${Math.round(genHp(player.lvl) / normalDamage(enemy.str, player.def) * 10) / 10}`}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
