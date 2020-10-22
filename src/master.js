export function getGroups() {
  return [
    {name: '鬼滅の刃コラボ', ids: [6530,6531,6532,6539,6540,6541,] },
    {name: '戦国2　転生進化', ids: [6357,6358,6359,6360,6361,] },
    {name: '戦国3　アシスト', ids: [6237,6239,6241,6243,6245,] },
    {name: '大魔女2　アシスト', ids: [6154,6157,6160,5843,5846,] },





  ];
}

export function getCharacters() {
  return {
    5843: {name:'ファスカの魔鳥箒・デザン', assist_only: true, type: [], effect: [49,17,17,17,17,17,2,], ext_effect: [], leader_skill: '', normal_skill: '消せないドロップ、バインド、覚醒無効状態を全回復。3ターンの間、回復力とドロップ操作時間が2倍。', ns_max:15, ns_min: 15},
    5846: {name:'ネレの魔石杖・ビリオス', assist_only: true, type: [], effect: [49,18,18,18,18,18,2,], ext_effect: [], leader_skill: '', normal_skill: '2ターンの間、ダメージ吸収を無効化する。左端縦1列を闇に、右端縦1列を回復ドロップに変化。', ns_max:22, ns_min: 22},
    6154: {name:'レムゥの魔夢杖・ルリーク', assist_only: true, type: [], effect: [49,14,14,14,14,14,2,], ext_effect: [], leader_skill: '', normal_skill: '2ターンの間、属性吸収を無効化。左端縦2列を火ドロップに、右端縦2列を回復ドロップに変化。', ns_max:14, ns_min: 14},
    6157: {name:'ノルザの魔魚杖・メズレイ', assist_only: true, type: [], effect: [49,15,15,15,15,15,2,], ext_effect: [], leader_skill: '', normal_skill: '1ターンの間、2コンボ加算される。全ドロップのロックを解除し、水と回復ドロップに変化。', ns_max:16, ns_min: 16},
    6160: {name:'アルジェの魔木器・グゥム', assist_only: true, type: [], effect: [49,16,16,16,16,16,2,], ext_effect: [], leader_skill: '', normal_skill: '3ターンの間、ダメージ無効を貫通する。全ドロップを火、水、木、光、闇ドロップに変化。', ns_max:26, ns_min: 26},
    6237: {name:'武田信玄装備', assist_only: true, type: [], effect: [49,21,11,11,11,11,2,], ext_effect: [], leader_skill: '', normal_skill: '全ドロップを火、木、回復ドロップに変化。全ドロップを強化し、ロック。', ns_max:'?', ns_min: 9},
    6239: {name:'上杉謙信装備', assist_only: true, type: [], effect: [49,21,12,12,12,12,2,], ext_effect: [], leader_skill: '', normal_skill: 'HPが1になるが、敵1体に攻撃力×200倍の水属性攻撃。1ターンの間、ダメージ吸収を無効化する。', ns_max:'?', ns_min: 8},
    6241: {name:'伊達政宗装備', assist_only: true, type: [], effect: [49,21,13,13,13,13,2,], ext_effect: [], leader_skill: '', normal_skill: 'HPが50％減るが、敵1体に攻撃力×100倍の木属性攻撃。1ターンの間、2コンボ加算、木属性の攻撃力が2倍。', ns_max:'?', ns_min: 8},
    6243: {name:'豊臣秀吉装備', assist_only: true, type: [], effect: [49,21,11,11,11,11,2,], ext_effect: [], leader_skill: '', normal_skill: '全ドロップを水と光ドロップに変化。全ドロップを強化し、ロック。', ns_max:'?', ns_min: 12},
    6245: {name:'徳川家康装備', assist_only: true, type: [], effect: [49,21,12,12,12,12,2,], ext_effect: [], leader_skill: '', normal_skill: '3ターンの間、落ちコンしなくなる。敵全体を超猛毒にする（50倍）。', ns_max:'?', ns_min: 3},
    6357: {name:'転生稲姫', assist_only: false, type: [1,6,7,], effect: [52,28,28,21,21,53,69,34,34,], ext_effect: [62,60,48,], leader_skill: 'ドロップを3個以下で消せないが、火属性の攻撃力が5倍。火の2コンボ以上でダメージを半減、攻撃力が4倍、2コンボ加算。', normal_skill: '消せないドロップ、バインド、覚醒無効状態を5ターン回復。全ドロップを火、木、回復ドロップに変化。', ns_max:'?', ns_min: 11},
    6358: {name:'転生ねね', assist_only: false, type: [1,2,6,], effect: [52,28,28,21,21,53,68,33,33,], ext_effect: [62,60,48,], leader_skill: 'ドロップを3個以下で消せないが、水属性の攻撃力が5倍。水の2コンボ以上でダメージを半減、攻撃力が4倍、2コンボ加算。', normal_skill: '消せないドロップ、バインド、覚醒無効状態を5ターン回復。全ドロップを水、光、回復ドロップに変化', ns_max:'?', ns_min: 11},
    6359: {name:'転生お市', assist_only: false, type: [1,3,6,], effect: [52,28,28,21,21,53,70,32,32,], ext_effect: [62,60,48,], leader_skill: 'ドロップを3個以下で消せないが、木属性の攻撃力が5倍。木の2コンボ以上でダメージを半減、攻撃力が4倍、2コンボ加算。', normal_skill: '消せないドロップ、バインド、覚醒無効状態を5ターン回復。全ドロップを木、闇、回復ドロップに変化。', ns_max:'?', ns_min: 11},
    6360: {name:'転生立花ぎん千代', assist_only: false, type: [1,6,7,], effect: [43,43,53,28,56,44,70,11,12,], ext_effect: [52,56,53,], leader_skill: '【7×6マス】攻撃タイプの攻撃力と回復力が2倍。火水木光の同時攻撃でダメージを軽減（25％）、攻撃力が6倍。', normal_skill: '1ターンの間、受けるダメージを激減（75％）。全ドロップを火、水、木、光、回復ドロップに変化。', ns_max:'?', ns_min: 9},
    6361: {name:'転生濃姫', assist_only: false, type: [1,3,7,], effect: [43,43,53,28,56,44,69,11,13,], ext_effect: [52,56,53,], leader_skill: '【7×6マス】悪魔タイプの攻撃力と回復力が2倍。火水木闇の同時攻撃でダメージを軽減（25％）、攻撃力が6倍。', normal_skill: '1ターンの間、受けるダメージを激減（75％）。全ドロップを火、水、木、闇、回復ドロップに変化。', ns_max:'?', ns_min: 9},
    6530: {name:'竈門炭治郎', assist_only: false, type: [6,], effect: [44,48,43,43,63,], ext_effect: [], leader_skill: '水属性と攻撃タイプのHPと回復力が1.5倍、攻撃力は12倍。水ドロップを消すとダメージを軽減、1コンボ加算。', normal_skill: '5ターンの間、敵の防御力が0になる。鬼殺隊・竈門炭治郎に変身。', ns_max:'?', ns_min: 18},
    6531: {name:'鬼殺隊・竈門炭治郎', assist_only: false, type: [6,], effect: [44,48,43,43,43,53,33,52,63,], ext_effect: [], leader_skill: '水属性と攻撃タイプのHPと回復力が2倍、攻撃力は18倍。水を4個以上繋げて消すとダメージを軽減、3コンボ加算。', normal_skill: '1ターンの間、騎亜福力と攻撃タイプの攻撃力が1.5倍。水と回復以外のドロップから火ドロップを4個生成。', ns_max:2, ns_min: 2},
    6532: {name:'炭治郎の耳飾り（炭治郎装備）', assist_only: true, type: [], effect: [49,21,53,28,1,], ext_effect: [], leader_skill: '', normal_skill: '3ターンの間、ドロップ操作時間と回復力が2倍。3ターンの間、攻撃タイプの攻撃力が2倍、2コンボ加算。', ns_max:'?', ns_min: 15},
    6539: {name:'竈門禰豆子', assist_only: false, type: [3,6,8,], effect: [28,21,21,21,63,], ext_effect: [], leader_skill: '火回復の同時攻撃でダメージを半減、攻撃が9倍。', normal_skill: '自分以外の味方スキルが2ターン溜まる。鬼化・竈門禰豆子に変身。', ns_max:'?', ns_min: 16},
    6540: {name:'鬼化・竈門禰豆子', assist_only: false, type: [3,6,8,], effect: [28,43,43,48,48,54,60,52,63,], ext_effect: [], leader_skill: '回復と攻撃タイプの全パラメータが1.5倍。ドロップ操作を5秒延長。火回復の同時攻撃でダメージを半減、攻撃が9倍、固定1ダメージ。', normal_skill: '消せないドロップ、バインド、覚醒無効状態を7ターン回復。2ターンの間、HPを20％回復。', ns_max:4, ns_min: 4},
    6541: {name:'禰豆子の背負い箱（禰豆子装備）', assist_only: true, type: [], effect: [49,55,14,14,14,1,], ext_effect: [], leader_skill: '', normal_skill: '2ターンの間、受けるダメージを半減。消せないドロップ、ダインド、覚醒無効状態を全回復。', ns_max:12, ns_min: 12},
    



  }
}