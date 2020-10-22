import React, { Compornent } from 'react'
import './App.css';
import { getGroups, getCharacters } from './master.js';

const switchAddEffect = (typeAry) => {
  let addEffectSwitch = [false, false, false, false, false, false, false, false];

  // バランスなら全部ON
  if (Array.isArray(typeAry)) {
    if (typeAry.includes(5)) {
      addEffectSwitch = [true, true, true, true, true, true, true, true];
    } else {
      if (typeAry.includes(3) || typeAry.includes(4)) {
        addEffectSwitch[0] = true;
      }
      if (typeAry.includes(8)) {
        addEffectSwitch[1] = true;
      }
      if (typeAry.includes(1) || typeAry.includes(6)) {
        addEffectSwitch[2] = true;
      }
      if (typeAry.includes(2) || typeAry.includes(7)) {
        addEffectSwitch[3] = true;
      }
      if (typeAry.includes(4)) {
        addEffectSwitch[4] = true;
      }
      if (typeAry.includes(8)) {
        addEffectSwitch[5] = true;
      }
      if (typeAry.includes(6)) {
        addEffectSwitch[6] = true;
      }
      if (typeAry.includes(2) || typeAry.includes(7)) {
        addEffectSwitch[7] = true;
      }
    }
  }
  return addEffectSwitch;
};

function App() {
  return (
    <div className="container mx-auto main-container">
      <List />
    </div>
  )
}

const groupAry = getGroups();

const characterAry = getCharacters();

const liDefault =
  <li className="pt-3">
    <div className="default-txt">
      <p>PSL パズドラシリーズ一覧へようこそ！</p>
      <p>このサイトはパズル＆ドラゴンズのシリーズ別のモンスターを一覧表示するWEBアプリです。</p>
      <p>下部のプルダウンからシリーズを選択してみてください。</p>
    </div>
  </li>;

class List extends React.Component {

  // ステート（li要素）の定義
  constructor(props) {
    super(props);
    this.state = {
      li: liDefault
    }
    this.onChangeSelectBox = this.onChangeSelectBox.bind(this);
  }

  // liを動的に生成
  onChangeSelectBox(event) {
    let characterList = [];
    // 未選択状態
    if (event.target.value == '') {
      this.setState((state) => ({
        li: liDefault
      }));
      return;
    }
    // グループに応じたliを生成
    let group = groupAry[event.target.value]['ids'];
    for (let groupId in group) {
      let characterId = group[groupId];
      let tmpCharacter = characterAry[characterId];
      // タイプ
      let typeList = [];
      for (let i in tmpCharacter['type']) {
        let typeImgPath = "./img/type/" + tmpCharacter['type'][i] + ".png";
        typeList.push(
          <img className="mini-icon" src={typeImgPath} />
        );
      }
      // 覚醒スキル
      let effectList = [];
      for (let i in tmpCharacter['effect']) {
        let tmpId = (tmpCharacter['effect'][i] > 9) ? tmpCharacter['effect'][i] : '0' + tmpCharacter['effect'][i];
        let effectImgPath = "./img/effect/" + tmpId + ".png";
        effectList.push(
          <img className="mini-icon" src={effectImgPath} />
        );
      }
      // アシスト専用キャラはスキップ
      let extEffectList = [];
      let addEffectList = [];
      let leaderSkill = [];
      /* ===== start assist_only ===== */
      if (!tmpCharacter['assist_only']) {
        // 潜在キラー
        let addEffectSwitch = switchAddEffect(tmpCharacter['type']);
        for (let i in addEffectSwitch) {
          let tmpSwitch = addEffectSwitch[i] ? 'on' : 'off';
          let addEffectImgPath = './img/add_effect/' + (parseInt(i) + 1) + '_' + tmpSwitch + '.png'
          addEffectList.push(
            <img className="mini-icon" src={addEffectImgPath} />
          );
        }
        // リーダースキル
        leaderSkill.push(
          <tr><td>LS: {tmpCharacter['leader_skill']}</td></tr>
        );
      }
      /* ===== end assist_only ===== */
      // 超覚醒
      if (tmpCharacter['ext_effect'].length == 0) {
        extEffectList.push(
          <img className="mini-icon" src="./img/effect/none.png" />
        )
      } else {
        if (tmpCharacter['ext_effect'][0] != 0) {
          tmpCharacter['ext_effect'].unshift(0);
        }
        for (let i in tmpCharacter['ext_effect']) {
          let tmpId = (tmpCharacter['ext_effect'][i] > 10) ? tmpCharacter['ext_effect'][i] : '0' + tmpCharacter['ext_effect'][i];
          let extEffectImgPath = "./img/effect/" + tmpId + ".png";
          extEffectList.push(
            <img className="mini-icon" src={extEffectImgPath} />
          );
        }
      }
      // スキル
      let normalSkill = [];
      let nsTurn = (tmpCharacter['ns_max']==tmpCharacter['ns_min']) ? tmpCharacter['ns_min'] : tmpCharacter['ns_max']+'→'+tmpCharacter['ns_min'];
      normalSkill.push(
        <tr><td>S: ({nsTurn}) {tmpCharacter['normal_skill']}</td></tr>
      );
      // キャラクター画像
      let characterImgPath = "./img/character/" + characterId + ".jpg";
      characterList.push(
        <li>
          <div className="left-box">
            <img className="character-img" src={characterImgPath} />
            {typeList}
          </div>
          <p className="mt-0 mb-1 font-weight-bold">{tmpCharacter['name']}</p>
          <div>{effectList}</div>
          <div>{extEffectList}</div>
          <div>{addEffectList}</div>
          <table className="skill-box"><tbody>
            {leaderSkill}
            {normalSkill}
          </tbody></table>
        </li>
      );
    }
    this.setState((state) => ({
      li: characterList
    }));
    window.scrollTo(0, 0);
  }

  // メインのレンダリング
  render() {
    let ua = window.navigator.userAgent.toLowerCase();
    let selectClassName = "select-area";
    if (ua.indexOf("windows nt") !== -1) {
      // 変更なし
    } else if (ua.indexOf("android") !== -1) {
      // セレクトボックスを下部に移動
      selectClassName += " select-area-bottom";
    } else if (ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) {
      // 変更なし
    } else if (ua.indexOf("mac os x") !== -1) {
      // 変更なし
    }

    // セレクトボックスの選択肢を生成
    let list = [];
    for (let groupId in groupAry) {
      list.push(<option value={groupId}>{groupAry[groupId].name}</option>);
    }
    return (
      <div>
        <div className={selectClassName}>
          <select className="" onChange={(event) => this.onChangeSelectBox(event)}>
            <option value="">シリーズを選択肢してください</option>
            {list}
          </select>
        </div>
        <ul>
          {this.state.li}
        </ul>
      </div>
    );
  }
}

export default App
