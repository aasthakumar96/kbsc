import React, {useEffect} from 'react';
import './keyboard.css';


export default function ENUS(props) {
  let shortcut = "";
  let elements = [];

  if(props.shortcut){
  shortcut = props.shortcut.replace(/\s/g, "");
  console.log("trimmed" + shortcut)
  elements = shortcut.split("+");
  }
  console.log(elements);

  
      return (
        <div>
          
         <div id="keyboard">
            <div id="keyboard-bg">
              {/* 1234567890 */}
              <div className="kr2">
                <div className="key"><div className="kc"><div className="kb" style={{left: '0px'}} /><div className="kt" style={{left: '6px'}} /><div className={elements.includes(">") || elements.includes("<") ? "highlighted kls" : "kls"} style={{left: '6px'}}><div className="kl kl0 ts5"><div>&gt;</div></div><div className="kl kl6 ts5"><div title="< U+003C LESS-THAN SIGN
  SHIFT: > U+003E GREATER-THAN SIGN">&lt;</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '54px'}} /><div className="kt" style={{left: '60px'}} /><div className={elements.includes("!") ? "highlighted kls" : "kls"} style={{left: '60px'}}><div className="kl kl0 ts5"><div>!</div></div><div className="kl kl6 ts5"><div title="1 U+0031 DIGIT ONE
  SHIFT: ! U+0021 EXCLAMATION MARK">1</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '108px'}} /><div className="kt" style={{left: '114px'}} /><div className={elements.includes("@") ? "highlighted kls" : "kls"} style={{left: '114px'}}><div className="kl kl0 ts5"><div>@</div></div><div className="kl kl6 ts5"><div title="2 U+0032 DIGIT TWO
  SHIFT: @ U+0040 COMMERCIAL AT
  SHIFT+CONTROL:  U+0000 <control>">2</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '162px'}} /><div className="kt" style={{left: '168px'}} /><div className={elements.includes("#") ? "highlighted kls" : "kls"} style={{left: '168px'}}><div className="kl kl0 ts5"><div>#</div></div><div className="kl kl6 ts5"><div title="3 U+0033 DIGIT THREE
  SHIFT: # U+0023 NUMBER SIGN">3</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '216px'}} /><div className="kt" style={{left: '222px'}} /><div className={elements.includes("$") ? "highlighted kls" : "kls"} style={{left: '222px'}}><div className="kl kl0 ts5"><div>$</div></div><div className="kl kl6 ts5"><div title="4 U+0034 DIGIT FOUR
  SHIFT: $ U+0024 DOLLAR SIGN">4</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '270px'}} /><div className="kt" style={{left: '276px'}} /><div className={elements.includes("%") ? "highlighted kls" : "kls"} style={{left: '276px'}}><div className="kl kl0 ts5"><div>%</div></div><div className="kl kl6 ts5"><div title="5 U+0035 DIGIT FIVE
  SHIFT: % U+0025 PERCENT SIGN">5</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '324px'}} /><div className="kt" style={{left: '330px'}} /><div className={elements.includes("^") ? "highlighted kls" : "kls"} style={{left: '330px'}}><div className="kl kl0 ts5"><div>^</div></div><div className="kl kl6 ts5"><div title="6 U+0036 DIGIT SIX
  SHIFT: ^ U+005E CIRCUMFLEX ACCENT
  SHIFT+CONTROL:  U+001E <control>">6</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '378px'}} /><div className="kt" style={{left: '384px'}} /><div className={elements.includes("&") ? "highlighted kls" : "kls"} style={{left: '384px'}}><div className="kl kl0 ts5"><div>&amp;</div></div><div className="kl kl6 ts5"><div title="7 U+0037 DIGIT SEVEN
  SHIFT: & U+0026 AMPERSAND">7</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '432px'}} /><div className="kt" style={{left: '438px'}} /><div className={elements.includes("*") ? "highlighted kls" : "kls"} style={{left: '438px'}}><div className="kl kl0 ts5"><div>*</div></div><div className="kl kl6 ts5"><div title="8 U+0038 DIGIT EIGHT
  SHIFT: * U+002A ASTERISK">8</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '486px'}} /><div className="kt" style={{left: '492px'}} /><div className={elements.includes("(") ? "highlighted kls" : "kls"} style={{left: '492px'}}><div className="kl kl0 ts5"><div>(</div></div><div className="kl kl6 ts5"><div title="9 U+0039 DIGIT NINE
  SHIFT: ( U+0028 LEFT PARENTHESIS">9</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '540px'}} /><div className="kt" style={{left: '546px'}} /><div className={elements.includes(")") ? "highlighted kls" : "kls"} style={{left: '546px'}}><div className="kl kl0 ts5"><div>)</div></div><div className="kl kl6 ts5"><div title="0 U+0030 DIGIT ZERO
  SHIFT: ) U+0029 RIGHT PARENTHESIS">0</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '594px'}} /><div className="kt" style={{left: '600px'}} /><div className={elements.includes("_") ? "highlighted kls" : "kls"} style={{left: '600px'}}><div className="kl kl0 ts5"><div>_</div></div><div className="kl kl6 ts5"><div title="- U+002D HYPHEN-MINUS
  SHIFT: _ U+005F LOW LINE
  SHIFT+CONTROL:  U+001F <control>">-</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '648px'}} /><div className="kt" style={{left: '654px'}} /><div className={elements.includes("+") ? "highlighted kls" : "kls"} style={{left: '654px'}}><div className="kl kl0 ts5"><div>+</div></div><div className="kl kl6 ts5"><div title="= U+003D EQUALS SIGN
  SHIFT: + U+002B PLUS SIGN">=</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '702px', width: '109px'}} /><div className="kt" style={{left: '708px', width: '97px'}} /><div className={elements.includes("␈") ? "highlighted kls" : "kls"} style={{left: '708px'}}><div className="kl kl0 ts5" style={{width: '91px'}}><div style={{width: '91px', maxWidth: '91px'}}>␈</div></div><div className="kl kl6 ts5" style={{width: '91px'}}><div style={{width: '91px', maxWidth: '91px'}} title=" U+0008 <control>
  SHIFT:  U+0008 <control>
  CONTROL:  U+007F <control>">␈</div></div></div></div></div>
              </div>
              {/* QWERTYUIOP */}
              <div className="kr3">
                <div className="key"><div className="kc"><div className="kb" style={{left: '0px', width: '81px'}} /><div className="kt" style={{left: '6px', width: '69px'}} /><div className={elements.includes("␉") ? "highlighted kls" : "kls"} style={{left: '6px'}}><div className="kl kl0 ts5" style={{width: '63px'}}><div style={{width: '63px', maxWidth: '63px'}}>␉</div></div><div className="kl kl6 ts5" style={{width: '63px'}}><div style={{width: '63px', maxWidth: '63px'}} title=" U+0009 <control>
  SHIFT:  U+0009 <control>">␉</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '81px'}} /><div className="kt" style={{left: '87px'}} /><div className={elements.includes("q") ? "highlighted kls" : "kls"} style={{left: '87px'}}><div className="kl kl0 ts5"><div>Q</div></div><div className="kl kl6 ts5"><div title="q U+0071 LATIN SMALL LETTER Q
  SHIFT: Q U+0051 LATIN CAPITAL LETTER Q
  CAPITAL: Q U+0051 LATIN CAPITAL LETTER Q
  SHIFT+CAPITAL: q U+0071 LATIN SMALL LETTER Q">q</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '135px'}} /><div className="kt" style={{left: '141px'}} /><div className={elements.includes("w") ? "highlighted kls" : "kls"} style={{left: '141px'}}><div className="kl kl0 ts5"><div>W</div></div><div className="kl kl6 ts5"><div title="w U+0077 LATIN SMALL LETTER W
  SHIFT: W U+0057 LATIN CAPITAL LETTER W
  CAPITAL: W U+0057 LATIN CAPITAL LETTER W
  SHIFT+CAPITAL: w U+0077 LATIN SMALL LETTER W">w</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '189px'}} /><div className="kt" style={{left: '195px'}} /><div className={elements.includes("e") ? "highlighted kls" : "kls"} style={{left: '195px'}}><div className="kl kl0 ts5"><div>E</div></div><div className="kl kl6 ts5"><div title="e U+0065 LATIN SMALL LETTER E
  SHIFT: E U+0045 LATIN CAPITAL LETTER E
  CAPITAL: E U+0045 LATIN CAPITAL LETTER E
  SHIFT+CAPITAL: e U+0065 LATIN SMALL LETTER E">e</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '243px'}} /><div className="kt" style={{left: '249px'}} /><div className={elements.includes("r") ? "highlighted kls" : "kls"} style={{left: '249px'}}><div className="kl kl0 ts5"><div>R</div></div><div className="kl kl6 ts5"><div title="r U+0072 LATIN SMALL LETTER R
  SHIFT: R U+0052 LATIN CAPITAL LETTER R
  CAPITAL: R U+0052 LATIN CAPITAL LETTER R
  SHIFT+CAPITAL: r U+0072 LATIN SMALL LETTER R">r</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '297px'}} /><div className="kt" style={{left: '303px'}} /><div className={elements.includes("t") ? "highlighted kls" : "kls"} style={{left: '303px'}}><div className="kl kl0 ts5"><div>T</div></div><div className="kl kl6 ts5"><div title="t U+0074 LATIN SMALL LETTER T
  SHIFT: T U+0054 LATIN CAPITAL LETTER T
  CAPITAL: T U+0054 LATIN CAPITAL LETTER T
  SHIFT+CAPITAL: t U+0074 LATIN SMALL LETTER T">t</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '351px'}} /><div className="kt" style={{left: '357px'}} /><div className={elements.includes("y") ? "highlighted kls" : "kls"} style={{left: '357px'}}><div className="kl kl0 ts5"><div>Y</div></div><div className="kl kl6 ts5"><div title="y U+0079 LATIN SMALL LETTER Y
  SHIFT: Y U+0059 LATIN CAPITAL LETTER Y
  CAPITAL: Y U+0059 LATIN CAPITAL LETTER Y
  SHIFT+CAPITAL: y U+0079 LATIN SMALL LETTER Y">y</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '405px'}} /><div className="kt" style={{left: '411px'}} /><div className={elements.includes("u") ? "highlighted kls" : "kls"} style={{left: '411px'}}><div className="kl kl0 ts5"><div>U</div></div><div className="kl kl6 ts5"><div title="u U+0075 LATIN SMALL LETTER U
  SHIFT: U U+0055 LATIN CAPITAL LETTER U
  CAPITAL: U U+0055 LATIN CAPITAL LETTER U
  SHIFT+CAPITAL: u U+0075 LATIN SMALL LETTER U">u</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '459px'}} /><div className="kt" style={{left: '465px'}} /><div className={elements.includes("i") ? "highlighted kls" : "kls"} style={{left: '465px'}}><div className="kl kl0 ts5"><div>I</div></div><div className="kl kl6 ts5"><div title="i U+0069 LATIN SMALL LETTER I
  SHIFT: I U+0049 LATIN CAPITAL LETTER I
  CAPITAL: I U+0049 LATIN CAPITAL LETTER I
  SHIFT+CAPITAL: i U+0069 LATIN SMALL LETTER I">i</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '513px'}} /><div className="kt" style={{left: '519px'}} /><div className={elements.includes("o") ? "highlighted kls" : "kls"} style={{left: '519px'}}><div className="kl kl0 ts5"><div>O</div></div><div className="kl kl6 ts5"><div title="o U+006F LATIN SMALL LETTER O
  SHIFT: O U+004F LATIN CAPITAL LETTER O
  CAPITAL: O U+004F LATIN CAPITAL LETTER O
  SHIFT+CAPITAL: o U+006F LATIN SMALL LETTER O">o</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '567px'}} /><div className="kt" style={{left: '573px'}} /><div className={elements.includes("p") ? "highlighted kls" : "kls"} style={{left: '573px'}}><div className="kl kl0 ts5"><div>P</div></div><div className="kl kl6 ts5"><div title="p U+0070 LATIN SMALL LETTER P
  SHIFT: P U+0050 LATIN CAPITAL LETTER P
  CAPITAL: P U+0050 LATIN CAPITAL LETTER P
  SHIFT+CAPITAL: p U+0070 LATIN SMALL LETTER P">p</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '621px'}} /><div className="kt" style={{left: '627px'}} /><div className={elements.includes("{") ? "highlighted kls" : "kls"} style={{left: '627px'}}><div className="kl kl0 ts5"><div>{'{'}</div></div><div className="kl kl6 ts5"><div title="[ U+005B LEFT SQUARE BRACKET
  SHIFT: { U+007B LEFT CURLY BRACKET
  CONTROL:  U+001B <control>">[</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '675px'}} /><div className="kt" style={{left: '681px'}} /><div className={elements.includes("}") ? "highlighted kls" : "kls"} style={{left: '681px'}}><div className="kl kl0 ts5"><div>{'}'}</div></div><div className="kl kl6 ts5"><div title="] U+005D RIGHT SQUARE BRACKET
  SHIFT: } U+007D RIGHT CURLY BRACKET
  CONTROL:  U+001D <control>">]</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '743px', width: '68px', height: '108px'}} />
                    <div className="kb" style={{left: '729px', top: '54px', width: '81px', height: '54px'}} /> 
                    <div className="kb" style={{borderRadius: '5px', left: '744px', top: '55px', width: '66px', height: '106px', backgroundColor: 'rgb(204, 204, 204)', borderStyle: 'none'}} />
                    <div className="kt" style={{left: '749px', top: '57px', width: '56px', height: '96px'}} />
                    <div className="kt" style={{backgroundPosition: '0px 0px', borderStyle: 'none !important', left: '735px', top: '57px', width: '69px', height: '42px', backgroundSize: '69px 96px'}} />
                    <div className="kt" style={{backgroundPosition: '-13px 0px', borderStyle: 'none !important', left: '750px', top: '59px', width: '54px', height: '94px', backgroundSize: '69px 96px'}} />    
                    <div className={elements.includes("␍") ? "highlighted kls" : "kls"} style={{left: '749px', top: '57px', width: '56px', height: '96px'}}><div className="kl kl0 ts5" style={{width: '50px', height: '90px'}}><div style={{width: '50px', maxWidth: '50px', height: '90px'}}>␍</div></div><div className="kl kl6 ts5" style={{width: '50px', height: '90px'}}><div style={{width: '50px', maxWidth: '50px', height: '90px'}} title=" U+000D <control>
  SHIFT:  U+000D <control>
  CONTROL:  U+000A <control>">␍</div></div></div></div>
                </div>
              </div>
              {/* ASDFGHJKL */}
              <div className="kr4">
                <div className="key"><div className="kc"><div className="kb" style={{left: '0px', width: '95px'}} /><div className="kt" style={{left: '6px', width: '83px'}} /><div className="kls" style={{left: '6px', width: '83px'}}><div className="kl kl4 ts4" style={{width: '77px'}}><div style={{width: '77px', maxWidth: '77px'}}>Caps Lock</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '95px'}} /><div className="kt" style={{left: '101px'}} /><div className={elements.includes("a") ? "highlighted kls" : "kls"} style={{left: '101px'}}><div className="kl kl0 ts5"><div>A</div></div><div className="kl kl6 ts5"><div title="a U+0061 LATIN SMALL LETTER A
  SHIFT: A U+0041 LATIN CAPITAL LETTER A
  CAPITAL: A U+0041 LATIN CAPITAL LETTER A
  SHIFT+CAPITAL: a U+0061 LATIN SMALL LETTER A">a</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '149px'}} /><div className="kt" style={{left: '155px'}} /><div className={elements.includes("s") ? "highlighted kls" : "kls"} style={{left: '155px'}}><div className="kl kl0 ts5"><div>S</div></div><div className="kl kl6 ts5"><div title="s U+0073 LATIN SMALL LETTER S
  SHIFT: S U+0053 LATIN CAPITAL LETTER S
  CAPITAL: S U+0053 LATIN CAPITAL LETTER S
  SHIFT+CAPITAL: s U+0073 LATIN SMALL LETTER S">s</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '203px'}} /><div className="kt" style={{left: '209px'}} /><div className={elements.includes("d") ? "highlighted kls" : "kls"} style={{left: '209px'}}><div className="kl kl0 ts5"><div>D</div></div><div className="kl kl6 ts5"><div title="d U+0064 LATIN SMALL LETTER D
  SHIFT: D U+0044 LATIN CAPITAL LETTER D
  CAPITAL: D U+0044 LATIN CAPITAL LETTER D
  SHIFT+CAPITAL: d U+0064 LATIN SMALL LETTER D">d</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '257px'}} /><div className="kt" style={{left: '263px'}} /><div className={elements.includes("f") ? "highlighted kls" : "kls"} style={{left: '263px'}}><div className="kl kl0 ts5"><div>F</div></div><div className="kl kl6 ts5"><div title="f U+0066 LATIN SMALL LETTER F
  SHIFT: F U+0046 LATIN CAPITAL LETTER F
  CAPITAL: F U+0046 LATIN CAPITAL LETTER F
  SHIFT+CAPITAL: f U+0066 LATIN SMALL LETTER F">f</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '311px'}} /><div className="kt" style={{left: '317px'}} /><div className={elements.includes("g") ? "highlighted kls" : "kls"} style={{left: '317px'}}><div className="kl kl0 ts5"><div>G</div></div><div className="kl kl6 ts5"><div title="g U+0067 LATIN SMALL LETTER G
  SHIFT: G U+0047 LATIN CAPITAL LETTER G
  CAPITAL: G U+0047 LATIN CAPITAL LETTER G
  SHIFT+CAPITAL: g U+0067 LATIN SMALL LETTER G">g</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '365px'}} /><div className="kt" style={{left: '371px'}} /><div className={elements.includes("h") ? "highlighted kls" : "kls"} style={{left: '371px'}}><div className="kl kl0 ts5"><div>H</div></div><div className="kl kl6 ts5"><div title="h U+0068 LATIN SMALL LETTER H
  SHIFT: H U+0048 LATIN CAPITAL LETTER H
  CAPITAL: H U+0048 LATIN CAPITAL LETTER H
  SHIFT+CAPITAL: h U+0068 LATIN SMALL LETTER H">h</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '419px'}} /><div className="kt" style={{left: '425px'}} /><div className={elements.includes("j") ? "highlighted kls" : "kls"} style={{left: '425px'}}><div className="kl kl0 ts5"><div>J</div></div><div className="kl kl6 ts5"><div title="j U+006A LATIN SMALL LETTER J
  SHIFT: J U+004A LATIN CAPITAL LETTER J
  CAPITAL: J U+004A LATIN CAPITAL LETTER J
  SHIFT+CAPITAL: j U+006A LATIN SMALL LETTER J">j</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '473px'}} /><div className="kt" style={{left: '479px'}} /><div className={elements.includes("k") ? "highlighted kls" : "kls"} style={{left: '479px'}}><div className="kl kl0 ts5"><div>K</div></div><div className="kl kl6 ts5"><div title="k U+006B LATIN SMALL LETTER K
  SHIFT: K U+004B LATIN CAPITAL LETTER K
  CAPITAL: K U+004B LATIN CAPITAL LETTER K
  SHIFT+CAPITAL: k U+006B LATIN SMALL LETTER K">k</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '527px'}} /><div className="kt" style={{left: '533px'}} /><div className={elements.includes("l") ? "highlighted kls" : "kls"} style={{left: '533px'}}><div className="kl kl0 ts5"><div>L</div></div><div className="kl kl6 ts5"><div title="l U+006C LATIN SMALL LETTER L
  SHIFT: L U+004C LATIN CAPITAL LETTER L
  CAPITAL: L U+004C LATIN CAPITAL LETTER L
  SHIFT+CAPITAL: l U+006C LATIN SMALL LETTER L">l</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '581px'}} /><div className="kt" style={{left: '587px'}} /><div className={elements.includes(":") ? "highlighted kls" : "kls"} style={{left: '587px'}}><div className="kl kl0 ts5"><div>:</div></div><div className="kl kl6 ts5"><div title="; U+003B SEMICOLON
  SHIFT: : U+003A COLON">;</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '635px'}} /><div className="kt" style={{left: '641px'}} /><div className={elements.includes("\"") ? "highlighted kls" : "kls"} style={{left: '641px'}}><div className="kl kl0 ts5"><div>"</div></div><div className="kl kl6 ts5"><div title="' U+0027 APOSTROPHE
  SHIFT: &quot; U+0022 QUOTATION MARK">'</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '689px'}} /><div className="kt" style={{left: '695px'}} /><div className={elements.includes("~") ? "highlighted kls" : "kls"} style={{left: '695px'}}><div className="kl kl0 ts5"><div>~</div></div><div className="kl kl6 ts5"><div title="` U+0060 GRAVE ACCENT
  SHIFT: ~ U+007E TILDE
  CONTROL:  U+001C <control>">`</div></div></div></div></div>
              </div>
              {/* ZXCVBNM */}
              <div className="kr5">
                <div className="key"><div className="kc"><div className="kb" style={{left: '0px', width: '68px'}} /><div className="kt" style={{left: '6px', width: '56px'}} /><div className={elements.includes("Shift") ? "highlighted kls" : "kls"} style={{left: '6px', width: '56px'}}><div className="kl kl4 ts4" style={{width: '50px'}}><div style={{width: '50px', maxWidth: '50px'}}>Shift</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '68px'}} /><div className="kt" style={{left: '74px'}} /><div className={elements.includes("|") ? "highlighted kls" : "kls"} style={{left: '74px'}}><div className="kl kl0 ts5"><div>|</div></div><div className="kl kl6 ts5"><div title="\ U+005C REVERSE SOLIDUS
  SHIFT: | U+007C VERTICAL LINE
  CONTROL:  U+001C <control>">\</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '122px'}} /><div className="kt" style={{left: '128px'}} /><div className={elements.includes("z") ? "highlighted kls" : "kls"} style={{left: '128px' }}><div className="kl kl0 ts5"><div id="z">Z</div></div><div className="kl kl6 ts5"><div title="z U+007A LATIN SMALL LETTER Z
  SHIFT: Z U+005A LATIN CAPITAL LETTER Z
  CAPITAL: Z U+005A LATIN CAPITAL LETTER Z
  SHIFT+CAPITAL: z U+007A LATIN SMALL LETTER Z">z</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '176px'}} /><div className="kt" style={{left: '182px'}} /><div className={elements.includes("x") ? "highlighted kls" : "kls"} style={{left: '182px'}}><div className="kl kl0 ts5"><div>X</div></div><div className="kl kl6 ts5"><div title="x U+0078 LATIN SMALL LETTER X
  SHIFT: X U+0058 LATIN CAPITAL LETTER X
  CAPITAL: X U+0058 LATIN CAPITAL LETTER X
  SHIFT+CAPITAL: x U+0078 LATIN SMALL LETTER X">x</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '230px'}} /><div className="kt" style={{left: '236px'}} /><div className={elements.includes("c") ? "highlighted kls" : "kls"} style={{left: '236px'}}><div className="kl kl0 ts5"><div>C</div></div><div className="kl kl6 ts5"><div title="c U+0063 LATIN SMALL LETTER C
  SHIFT: C U+0043 LATIN CAPITAL LETTER C
  CAPITAL: C U+0043 LATIN CAPITAL LETTER C
  SHIFT+CAPITAL: c U+0063 LATIN SMALL LETTER C">c</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '284px'}} /><div className="kt" style={{left: '290px'}} /><div className={elements.includes("v") ? "highlighted kls" : "kls"} style={{left: '290px'}}><div className="kl kl0 ts5"><div>V</div></div><div className="kl kl6 ts5"><div title="v U+0076 LATIN SMALL LETTER V
  SHIFT: V U+0056 LATIN CAPITAL LETTER V
  CAPITAL: V U+0056 LATIN CAPITAL LETTER V
  SHIFT+CAPITAL: v U+0076 LATIN SMALL LETTER V">v</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '338px'}} /><div className="kt" style={{left: '344px'}} /><div className={elements.includes("b") ? "highlighted kls" : "kls"} style={{left: '344px'}}><div className="kl kl0 ts5"><div>B</div></div><div className="kl kl6 ts5"><div title="b U+0062 LATIN SMALL LETTER B
  SHIFT: B U+0042 LATIN CAPITAL LETTER B
  CAPITAL: B U+0042 LATIN CAPITAL LETTER B
  SHIFT+CAPITAL: b U+0062 LATIN SMALL LETTER B">b</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '392px'}} /><div className="kt" style={{left: '398px'}} /><div className={elements.includes("n") ? "highlighted kls" : "kls"} style={{left: '398px'}}><div className="kl kl0 ts5"><div>N</div></div><div className="kl kl6 ts5"><div title="n U+006E LATIN SMALL LETTER N
  SHIFT: N U+004E LATIN CAPITAL LETTER N
  CAPITAL: N U+004E LATIN CAPITAL LETTER N
  SHIFT+CAPITAL: n U+006E LATIN SMALL LETTER N">n</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '446px'}} /><div className="kt" style={{left: '452px'}} /><div className={elements.includes("m") ? "highlighted kls" : "kls"} style={{left: '452px'}}><div className="kl kl0 ts5"><div>M</div></div><div className="kl kl6 ts5"><div title="m U+006D LATIN SMALL LETTER M
  SHIFT: M U+004D LATIN CAPITAL LETTER M
  CAPITAL: M U+004D LATIN CAPITAL LETTER M
  SHIFT+CAPITAL: m U+006D LATIN SMALL LETTER M">m</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '500px'}} /><div className="kt" style={{left: '506px'}} /><div className={elements.includes(",") ? "highlighted kls" : "kls"} style={{left: '506px'}}><div className="kl kl0 ts5"><div>,</div></div><div className="kl kl6 ts5"><div title=", U+002C COMMA
  SHIFT: , U+002C COMMA">,</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '554px'}} /><div className="kt" style={{left: '560px'}} /><div className={elements.includes(".") ? "highlighted kls" : "kls"} style={{left: '560px'}}><div className="kl kl0 ts5"><div>.</div></div><div className="kl kl6 ts5"><div title=". U+002E FULL STOP
  SHIFT: . U+002E FULL STOP">.</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '608px'}} /><div className="kt" style={{left: '614px'}} /><div className={elements.includes("?") ? "highlighted kls" : "kls"} style={{left: '614px'}}><div className="kl kl0 ts5"><div>?</div></div><div className="kl kl6 ts5"><div title="/ U+002F SOLIDUS
  SHIFT: ? U+003F QUESTION MARK">/</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '662px', width: '149px'}} /><div className="kt" style={{left: '668px', width: '137px'}} /><div className={elements.includes("ShiftGr") ? "highlighted kls" : "kls"} style={{left: '668px', width: '137px'}}><div className="kl kl4 ts4" style={{width: '131px'}}><div style={{width: '131px', maxWidth: '131px'}}>Shift</div></div></div></div></div>
              </div>
              {/* Ctrl Alt Space */}
              <div className="kr6">
                <div className="key"><div className="kc"><div className="kb" style={{left: '0px', width: '68px'}} /><div className="kt" style={{left: '6px', width: '56px'}} /><div className={elements.includes("Ctrl") ? "highlighted kls" : "kls"} style={{left: '6px', width: '56px'}}><div className="kl kl4 ts4" style={{width: '50px'}}><div style={{width: '50px', maxWidth: '50px'}}>Ctrl</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '68px', width: '68px'}} /><div className="kt" style={{left: '74px', width: '56px'}} /><div className={elements.includes("Win") ? "highlighted kls" : "kls"} style={{left: '74px', width: '56px'}}><div className="kl kl4 ts4" style={{width: '50px'}}><div style={{width: '50px', maxWidth: '50px'}}>Win</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '135px', width: '68px'}} /><div className="kt" style={{left: '141px', width: '56px'}} /><div className={elements.includes("Alt") ? "highlighted kls" : "kls"} style={{left: '141px', width: '56px'}}><div className="kl kl4 ts4" style={{width: '50px'}}><div style={{width: '50px', maxWidth: '50px'}}>Alt</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '203px', width: '338px'}} /><div className="kt" style={{left: '209px', width: '326px'}} /><div className={elements.includes("␠") ? "highlighted kls" : "kls"} style={{left: '209px', width: '326px'}}><div className="kl kl0 ts5" style={{width: '320px'}}><div style={{width: '320px', maxWidth: '320px'}}>␠</div></div><div className="kl kl6 ts5" style={{width: '320px'}}><div style={{width: '320px', maxWidth: '320px'}} title="  U+0020 SPACE
  SHIFT:   U+0020 SPACE
  CONTROL:   U+0020 SPACE">␠</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '540px', width: '68px'}} /><div className="kt" style={{left: '546px', width: '56px'}} /><div className={elements.includes("AltGr") ? "highlighted kls" : "kls"} style={{left: '546px', width: '56px'}}><div className="kl kl4 ts4" style={{width: '50px'}}><div style={{width: '50px', maxWidth: '50px'}}>AltGr</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '608px', width: '68px'}} /><div className="kt" style={{left: '614px', width: '56px'}} /><div className={elements.includes("Win") ? "highlighted kls" : "kls"} style={{left: '614px', width: '56px'}}><div className="kl kl4 ts4" style={{width: '50px'}}><div style={{width: '50px', maxWidth: '50px'}}>Win</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '675px', width: '68px'}} /><div className="kt" style={{left: '681px', width: '56px'}} /><div className={elements.includes("Menu") ? "highlighted kls" : "kls"} style={{left: '681px', width: '56px'}}><div className="kl kl4 ts4" style={{width: '50px'}}><div style={{width: '50px', maxWidth: '50px'}}>Menu</div></div></div></div></div>
                <div className="key"><div className="kc"><div className="kb" style={{left: '743px', width: '68px'}} /><div className="kt" style={{left: '749px', width: '56px'}} /><div className={elements.includes("CtrlGr") ? "highlighted kls" : "kls"} style={{left: '749px', width: '56px'}}><div className="kl kl4 ts4" style={{width: '50px'}}><div style={{width: '50px', maxWidth: '50px'}}>Ctrl</div></div></div></div></div>
              </div>
            </div> {/* kbd-bg */}
          </div> {/* kbd */}
          <grammarly-desktop-integration data-grammarly-shadow-root="true" /><p />
        </div>
      );
    }
  

