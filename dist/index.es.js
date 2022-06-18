import { LRParser } from '@lezer/lr';
import { jsonHighlighting } from './highlight.js';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = LRParser.deserialize({
  version: 14,
  states: "$bO]QPOOOOQO'#Cd'#CdOtQQO'#CgO!PQPO'#ClOOQO'#Cr'#CrQOQPOOOOQO'#Ci'#CiO!WQPO'#ChO!]QPO'#CtOOQO,59R,59RO!eQPO,59RO!jQPO'#CxOOQO,59W,59WO!rQPO,59WO]QPO,59SOwQQO'#CmO!wQPO,59`OOQO1G.m1G.mO]QPO'#CnO#PQPO,59dOOQO1G.r1G.rOOQO1G.n1G.nOOQO,59X,59XOOQO-E6k-E6kOOQO,59Y,59YOOQO-E6l-E6l",
  stateData: "#X~OeOSPOSQOS~OSSOTSOUSOVSOYQO_ROgPO~OXXOgUOiUO~O^[O~P]Oj^O~Ok_OXhX~OXaO~OkbO^lX~O^dO~Ok_OXha~OkbO^la~O",
  goto: "!nmPPPPPPPPnPPntzPPn!O!UPPP![P!hPPP!kXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",
  nodeNames: "⚠ LineComment BlockComment JsonText True False Null Number String } { Object Property PropertyName ] [ Array",
  maxTerm: 28,
  nodeProps: [
    ["openedBy", 9,"{",14,"["],
    ["closedBy", 10,"}",15,"]"]
  ],
  propSources: [jsonHighlighting],
  skippedNodes: [0,1,2],
  repeatNodeCount: 2,
  tokenData: "Au~RtOX#cXY$mYZ$mZ]#c]^$m^p#cpq$mqr#crs$rsw#cwx'Ox|#c|})t}!O)y!O!P1P!P!Q1o!Q!R2x!R![3y![!]4}!]!}#c!}#O5S#O#P#c#P#Q5X#Q#S#c#S#T5^#T#Y#c#Y#Z8S#Z#b#c#b#c;s#c#h#c#h#i>o#i#o#c#o#pAk#p#q#c#q#rAp#r~#cQ#fWOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]~$OQ$TWiQOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]~$O~$rOe~~$uUpq$rqr$rrs%Xs#O$r#O#P%^#P~$r~%^Og~~%aXrs$r!P!Q$r#O#P$r#U#V$r#Y#Z$r#b#c$r#f#g$r#h#i$r#i#j%|~&PR!Q![&Y!c!i&Y#T#Z&Y~&]R!Q![&f!c!i&f#T#Z&f~&iR!Q![&r!c!i&r#T#Z&r~&uR!Q![$r!c!i$r#T#Z$r~'RVpq'Oqr'Osw'Owx'hx#O'O#O#P(S#P~'O~'mVg~pq'Oqr'Osw'Owx'hx#O'O#O#P(S#P~'O~(VXrs'O!P!Q'O#O#P'O#U#V'O#Y#Z'O#b#c'O#f#g'O#h#i'O#i#j(r~(uR!Q![)O!c!i)O#T#Z)O~)RR!Q![)[!c!i)[#T#Z)[~)_R!Q![)h!c!i)h#T#Z)h~)kR!Q!['O!c!i'O#T#Z'O~)yOk~R)|[OX$OXY#cZ]$O]^#c^p$Opq#cq!O$O!O!P*r!P!Q$O!Q!R.v!R![/y!]~$OR*wXiQOX$OXY#cZ]$O]^#c^p$Opq#cq!Q$O!Q![+d!]~$OR+k]VPiQOX$OXY#cZ]$O]^#c^p$Opq#cq!Q$O!Q![+d!]!g$O!g!h,d!h#X$O#X#Y,d#Y~$OR,i]iQOX$OXY#cZ]$O]^#c^p$Opq#cq{$O{|-b|}$O}!O-b!O!Q$O!Q![.S!]~$OR-gXiQOX$OXY#cZ]$O]^#c^p$Opq#cq!Q$O!Q![.S!]~$OR.ZXVPiQOX$OXY#cZ]$O]^#c^p$Opq#cq!Q$O!Q![.S!]~$OR.}^VPiQOX$OXY#cZ]$O]^#c^p$Opq#cq!O$O!O!P+d!P![$O!]!g$O!g!h,d!h#X$O#X#Y,d#Y~$OR0Q_VPiQOX$OXY#cZ]$O]^#c^p$Opq#cq!O$O!O!P+d!P!Q$O!Q![/y!]!g$O!g!h,d!h#X$O#X#Y,d#Y~$OR1SXOX$OXY#cZ]$O]^#c^p$Opq#cq!Q$O!Q![+d!]~$O~1rQz{1x!P!Q2m~1{ROz1xz{2U{~1x~2XTOz1xz{2U{!P1x!P!Q2h!Q~1x~2mOQ~~2rQP~OY2mZ~2mR2}^VPOX$OXY#cZ]$O]^#c^p$Opq#cq!O$O!O!P+d!P![$O!]!g$O!g!h,d!h#X$O#X#Y,d#Y~$OR4O_VPOX$OXY#cZ]$O]^#c^p$Opq#cq!O$O!O!P+d!P!Q$O!Q![/y!]!g$O!g!h,d!h#X$O#X#Y,d#Y~$O~5SOj~~5XO_~~5^O^~~5aVpq5^qr5^s#O5^#O#P5v#P#S5^#S#T7h#T~5^~5yXrs5^!P!Q5^#O#P5^#U#V5^#Y#Z5^#b#c5^#f#g5^#h#i5^#i#j6f~6iR!Q![6r!c!i6r#T#Z6r~6uR!Q![7O!c!i7O#T#Z7O~7RR!Q![7[!c!i7[#T#Z7[~7_R!Q![5^!c!i5^#T#Z5^~7mVg~pq5^qr5^s#O5^#O#P5v#P#S5^#S#T7h#T~5^R8VYOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]#T$O#T#U8u#U~$OR8zYiQOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]#`$O#`#a9j#a~$OR9oYiQOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]#g$O#g#h:_#h~$OR:dYiQOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]#X$O#X#Y;S#Y~$OR;ZWTPiQOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]~$OR;vYOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]#i$O#i#j<f#j~$OR<kYiQOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]#`$O#`#a=Z#a~$OR=`YiQOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]#`$O#`#a>O#a~$OR>VWUPiQOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]~$OR>rYOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]#f$O#f#g?b#g~$OR?gYiQOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]#i$O#i#j@V#j~$OR@[YiQOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]#X$O#X#Y@z#Y~$ORARWSPiQOX$OXY#cZ]$O]^#c^p$Opq#cq![$O!]~$O~ApOY~~AuOX~",
  tokenizers: [0, 1],
  topRules: {"JsonText":[0,3]},
  tokenPrec: 0
});

export { parser };
