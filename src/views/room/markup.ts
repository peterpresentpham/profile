// Static scene markup (SVG room + HUD), ported from the concept file.
export const ROOM_HTML = `<svg id="scene" viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid meet" role="img" aria-label="A cosy room whose window shows today's world">
  <defs>
    <linearGradient id="wallG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7f6baa"/><stop offset=".6" stop-color="#9884c0"/><stop offset="1" stop-color="#8672b0"/></linearGradient>
    <radialGradient id="wallLight" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#ffffff" stop-opacity=".16"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
    <linearGradient id="floorG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a5f40"/><stop offset=".25" stop-color="#b08256"/><stop offset="1" stop-color="#8a5f40"/></linearGradient>
    <linearGradient id="skirtG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
    <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1"><stop id="sk0" offset="0" stop-color="#3b8fe0"/><stop id="sk1" offset="1" stop-color="#a7d8f5"/></linearGradient>
    <linearGradient id="curtG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8e4560"/><stop offset=".25" stop-color="#c46a88"/><stop offset=".5" stop-color="#a24f6c"/><stop offset=".75" stop-color="#c46a88"/><stop offset="1" stop-color="#8e4560"/></linearGradient>
    <linearGradient id="woodG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6a273"/><stop offset="1" stop-color="#b98258"/></linearGradient>
    <linearGradient id="shelfG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a06a45"/><stop offset="1" stop-color="#7c4f33"/></linearGradient>
    <linearGradient id="screenG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2350"/><stop offset="1" stop-color="#0f1530"/></linearGradient>
    <linearGradient id="shaftG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9b0" stop-opacity=".42"/><stop offset=".55" stop-color="#ffe0a0" stop-opacity=".14"/><stop offset="1" stop-color="#ffe6a0" stop-opacity="0"/></linearGradient>
    <linearGradient id="waterG" x1="0" y1="0" x2="0" y2="1"><stop id="w0" offset="0" stop-color="#7fb4d8"/><stop id="w1" offset="1" stop-color="#2d6590"/></linearGradient>
    <linearGradient id="fogG" x1="0" y1="0" x2="0" y2="1"><stop id="fg0" offset="0" stop-color="#cfd6e0" stop-opacity="0"/><stop id="fg1" offset="1" stop-color="#cfd6e0" stop-opacity="1"/></linearGradient>
    <linearGradient id="aurG" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#40ffa0" stop-opacity="0"/><stop offset=".4" stop-color="#40ffa0" stop-opacity=".7"/><stop offset="1" stop-color="#b070ff" stop-opacity="0"/></linearGradient>
    <linearGradient id="coneG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd58a" stop-opacity=".85"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></linearGradient>
    <radialGradient id="holeG"><stop offset="0" stop-color="#000" stop-opacity="1"/><stop offset=".55" stop-color="#000" stop-opacity=".5"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
    <radialGradient id="warmG"><stop offset="0" stop-color="#ffd58a" stop-opacity=".8"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient>
    <radialGradient id="blueG"><stop offset="0" stop-color="#7fa6ff" stop-opacity=".5"/><stop offset="1" stop-color="#5a7cff" stop-opacity="0"/></radialGradient>
    <radialGradient id="sunG"><stop offset="0" stop-color="#fff6c9" stop-opacity="1"/><stop offset=".25" stop-color="#ffe9a0" stop-opacity=".9"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient>
    <radialGradient id="moonGl"><stop offset="0" stop-color="#cfd9ff" stop-opacity=".55"/><stop offset="1" stop-color="#9fb4ff" stop-opacity="0"/></radialGradient>
    <pattern id="paper" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M24 4l8 12-8 12-8-12z" fill="#fff" opacity=".5"/><circle cx="0" cy="0" r="2" fill="#fff"/><circle cx="48" cy="0" r="2" fill="#fff"/><circle cx="0" cy="48" r="2" fill="#fff"/><circle cx="48" cy="48" r="2" fill="#fff"/></pattern>
    <pattern id="panels" width="150" height="110" patternUnits="userSpaceOnUse" x="0" y="414"><rect x="14" y="14" width="122" height="84" rx="3" fill="#00000018" stroke="#ffffff22" stroke-width="2"/></pattern>
    <pattern id="planks" width="260" height="42" patternUnits="userSpaceOnUse" x="0" y="526"><rect width="260" height="42" fill="none"/><path d="M0 41.5H260" stroke="#000" stroke-opacity=".2" stroke-width="2"/><path d="M60 0V42M190 0V42" stroke="#000" stroke-opacity=".1" stroke-width="2"/></pattern>
    <g id="runes"><path id="rg0" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78L908 86L905 93L900 100L894 104L886 107L879 108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM676 296 677 295 710 341 744 380 780 415 817 445 856 470 895 490 937 506 979 518 1024 524 1072 527 1078 528 1085 531 1091 536 1096 542 1099 549 1100 557 1099 565 1096 572 1091 578 1085 583 1078 586 1070 587H1069L1019 584H1016L969 577V576H966H965L920 564L917 563H916L872 546L869 544L827 523V522H825L824 521L783 494L781 492L741 461H742L739 459L702 422H701L700 420V421L664 379L663 377L628 331H629L627 328L624 321L623 313L624 305L627 298L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM676 852 711 897 747 937 784 971 823 1001 863 1026 905 1047 948 1063 992 1074 1039 1081 1089 1084 1095 1085 1103 1088 1109 1092 1113 1099 1116 1106 1117 1114 1116 1121 1113 1129 1109 1135 1103 1140 1095 1143 1087 1144 1086 1143V1144L1035 1141H1032L982 1134V1133H979L931 1121L928 1120L882 1103L879 1101V1102L835 1080V1079H833L832 1078L790 1051L787 1049V1050L746 1018H747L744 1016L705 980L704 979L703 978L666 936L665 934L664 935L629 888L627 885L624 878L623 870L624 862L627 855L631 849L637 844L645 841L653 840L660 841L667 844L674 849ZM1096 -259 1099 -251 1100 -244 1099 -236 1096 -229 1094 -226 1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653L645 29L637 26L631 21L627 15L624 8L623 0L624 -8L627 -15L631 -21L637 -26L645 -29L651 -30L699 -32L743 -39L786 -51L827 -66L867 -87L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265Z"/><path id="rg1" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78L908 86L905 93L900 100L894 104L886 107L879 108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V108H456V200L455 208L452 215L448 221L441 226L434 229L426 230L419 229L411 226L405 221L400 215L397 208L396 200V78L397 71L400 63L405 57L411 52L419 49L426 48H622V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM678 298 681 305 683 313 681 321 678 328 676 331H677L642 377L641 379L605 421V420L604 422H603L566 459L563 461H564L524 492L522 494L495 512V652L494 660L491 668L486 674L480 678L472 681L465 682L457 681L450 678L443 674L439 668L436 660L435 652V545L433 546L389 563H388L385 564L340 576H339H336V577L289 584H286L236 587H235L227 586L220 583L214 578L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L233 527L281 524L326 518L368 506L410 490L449 470L488 445L525 415L561 380L595 341L628 295L629 296L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM259 -261 293 -216 327 -177 363 -142 400 -112 435 -89V-187L436 -195L439 -202L444 -208L450 -213L458 -216L465 -217L473 -216L480 -213L487 -208L491 -202L494 -195L495 -187V-60L519 -51L562 -39L606 -32L653 -30L699 -32L743 -39L786 -51L810 -60V-187L811 -195L814 -202L818 -208L825 -213L832 -216L840 -217L847 -216L855 -213L861 -208L866 -202L869 -195L870 -187V-89L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265L1096 -259L1099 -251L1100 -244L1099 -236L1096 -229L1094 -226L1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653H651L602 28V27H599L551 20L548 19L502 7L499 6L455 -11L452 -12L409 -34L408 -35L406 -36L365 -63H366L363 -65V-64L324 -96L322 -98L284 -134V-135L283 -136H282L246 -178H247L245 -180V-179L211 -226L209 -229L206 -236L205 -244L206 -251L209 -259L214 -265L220 -270L227 -273L235 -274L243 -273L250 -270L256 -265Z"/><path id="rg2" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78L908 86L905 93L900 100L894 104L886 107L879 108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM678 298 681 305 683 313 681 321 678 328 676 331H677L642 377L641 379L605 421V420L604 422H603L566 459L563 461H564L524 492L522 494L481 521L480 522H478V523L436 544L433 546L389 563H388L385 564L340 576H339H336V577L289 584H286L236 587H235L227 586L220 583L214 578L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L233 527L281 524L326 518L368 506L410 490L449 470L488 445L525 415L561 380L595 341L628 295L629 296L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM678 -311 681 -304 683 -296V-32H699L743 -39L786 -51L827 -66L867 -87L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265L1096 -259L1097 -257L1167 -118H1166L1169 -112L1170 -104L1169 -97L1166 -89L1161 -83L1155 -78L1147 -75L1140 -74L1132 -75L1125 -78L1118 -83L1114 -89L1113 -91L1065 -186L1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653L645 29L637 26L631 21L627 15L624 8L623 0V-296L624 -304L627 -311L631 -317L637 -322L645 -325L653 -326L660 -325L667 -322L674 -317Z"/><path id="rg3" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78V200L908 208L905 215L900 221L894 226L886 229L879 230L871 229L864 226L857 221L853 215L850 208L849 200V108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM257 537H258L291 576L325 610L361 639L398 665L436 687L476 704L518 718L561 728L606 734L654 736L660 737L667 740L674 744L678 751L681 758L683 766L681 773L678 781L674 787L667 792L660 795L653 796L651 795V796L602 793H599L552 787L549 786V787L503 776H502L500 775L456 761L453 759V760L411 741L408 740L367 717V716L365 715L326 688L324 686H323L286 655L284 653L248 618L247 616H246L212 576L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L235 527L243 528L250 531L256 536ZM676 852 711 897 747 937 784 971 823 1001 863 1026 905 1047 948 1063 992 1074 1039 1081 1089 1084 1095 1085 1103 1088 1109 1092 1113 1099 1116 1106 1117 1114 1116 1121 1113 1129 1109 1135 1103 1140 1095 1143 1087 1144 1086 1143V1144L1035 1141H1032L982 1134V1133H979L931 1121L928 1120L882 1103L879 1101V1102L835 1080V1079H833L832 1078L790 1051L787 1049V1050L746 1018H747L744 1016L705 980L704 979L703 978L683 955V1131L681 1139L678 1146L674 1152L667 1157L660 1160L653 1161L645 1160L637 1157L631 1152L627 1146L624 1139L623 1131V870L624 862L627 855L631 849L637 844L645 841L653 840L660 841L667 844L674 849ZM259 -261 293 -216 327 -177 363 -142 400 -112 435 -89V-187L436 -195L439 -202L444 -208L450 -213L458 -216L465 -217L473 -216L480 -213L487 -208L491 -202L494 -195L495 -187V-60L519 -51L562 -39L606 -32L653 -30L699 -32L743 -39L786 -51L810 -60V-187L811 -195L814 -202L818 -208L825 -213L832 -216L840 -217L847 -216L855 -213L861 -208L866 -202L869 -195L870 -187V-89L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265L1096 -259L1099 -251L1100 -244L1099 -236L1096 -229L1094 -226L1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653H651L602 28V27H599L551 20L548 19L502 7L499 6L455 -11L452 -12L409 -34L408 -35L406 -36L365 -63H366L363 -65V-64L324 -96L322 -98L284 -134V-135L283 -136H282L246 -178H247L245 -180V-179L211 -226L209 -229L206 -236L205 -244L206 -251L209 -259L214 -265L220 -270L227 -273L235 -274L243 -273L250 -270L256 -265Z"/><path id="rg4" d="M678 -15 681 -8 682 0V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V108H456V200L455 208L452 215L448 221L441 226L434 229L426 230L419 229L411 226L405 221L400 215L397 208L396 200V78L397 71L400 63L405 57L411 52L419 49L426 48H622V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM676 296 677 295 710 341 744 380 780 415 817 445 856 470 895 490 937 506 979 518 1024 524 1072 527 1078 528 1085 531 1091 536 1096 542 1099 549 1100 557 1099 565 1096 572 1091 578 1085 583 1078 586 1070 587H1069L1019 584H1016L969 577V576H966H965L920 564L917 563H916L872 546L869 544L827 523V522H825L824 521L783 494L781 492L741 461H742L739 459L702 422H701L700 420V421L664 379L663 377L653 364L642 377L641 379L605 421V420L604 422H603L566 459L563 461H564L524 492L522 494L481 521L480 522H478V523L436 544L433 546L389 563H388L385 564L340 576H339H336V577L289 584H286L236 587H235L227 586L220 583L214 578L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L233 527L281 524L326 518L368 506L410 490L449 470L488 445L525 415L561 380L595 341L628 295L629 296L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM1096 -259 1099 -251 1100 -244 1099 -236 1096 -229 1094 -226 1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653L645 29L637 26L631 21L627 15L624 8L623 0L624 -8L627 -15L631 -21L637 -26L645 -29L651 -30L699 -32L743 -39L786 -51L827 -66L867 -87L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265Z"/><path id="rg5" d="M678 -15 681 -8 682 0V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM678 298 681 305 683 313 681 321 678 328 676 331H677L642 377L641 379L605 421V420L604 422H603L566 459L563 461H564L524 492L522 494L495 512V652L494 660L491 668L486 674L480 678L472 681L465 682L457 681L450 678L443 674L439 668L436 660L435 652V545L433 546L389 563H388L385 564L340 576H339H336V577L289 584H286L236 587H235L227 586L220 583L214 578L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L233 527L281 524L326 518L368 506L410 490L449 470L488 445L525 415L561 380L595 341L628 295L629 296L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM676 852 711 897 747 937 784 971 823 1001 863 1026 905 1047 948 1063 992 1074 1039 1081 1089 1084 1095 1085 1103 1088 1109 1092 1113 1099 1116 1106 1117 1114 1116 1121 1113 1129 1109 1135 1103 1140 1095 1143 1087 1144 1086 1143V1144L1035 1141H1032L982 1134V1133H979L931 1121L928 1120L882 1103L879 1101V1102L835 1080V1079H833L832 1078L790 1051L787 1049V1050L746 1018H747L744 1016L705 980L704 979L703 978L666 936L665 934L664 935L629 888L627 885L624 878L623 870L624 862L627 855L631 849L637 844L645 841L653 840L660 841L667 844L674 849ZM259 -261 293 -216 327 -177 363 -142 400 -112 435 -89V-187L436 -195L439 -202L444 -208L450 -213L458 -216L465 -217L473 -216L480 -213L487 -208L491 -202L494 -195L495 -187V-60L519 -51L562 -39L606 -32L654 -30L660 -29L667 -26L674 -21L678 -15L681 -8L683 0L681 8L678 15L674 21L667 26L660 29L653 30H651L602 28V27H599L551 20L548 19L502 7L499 6L455 -11L452 -12L409 -34L408 -35L406 -36L365 -63H366L363 -65V-64L324 -96L322 -98L284 -134V-135L283 -136H282L246 -178H247L245 -180V-179L240 -186L192 -91L191 -89L187 -83L180 -78L173 -75L165 -74L158 -75L150 -78L144 -83L139 -89L136 -97L135 -104L136 -112L139 -118H138L208 -257L209 -259L214 -265L220 -270L227 -273L235 -274L243 -273L250 -270L256 -265Z"/><path id="rg6" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78L908 86L905 93L900 100L894 104L886 107L879 108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V108H456V200L455 208L452 215L448 221L441 226L434 229L426 230L419 229L411 226L405 221L400 215L397 208L396 200V78L397 71L400 63L405 57L411 52L419 49L426 48H622V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM676 296 677 295 710 341 744 380 780 415 817 445 856 470 895 490 937 506 979 518 1024 524 1072 527 1078 528 1085 531 1091 536 1096 542 1099 549 1100 557 1099 565 1096 572 1091 578 1085 583 1078 586 1070 587H1069L1019 584H1016L969 577V576H966H965L920 564L917 563H916L872 546L869 544L827 523V522H825L824 521L783 494L781 492L741 461H742L739 459L702 422H701L700 420V421L664 379L663 377L653 364L642 377L641 379L605 421V420L604 422H603L566 459L563 461H564L524 492L522 494L495 512V652L494 660L491 668L486 674L480 678L472 681L465 682L457 681L450 678L443 674L439 668L436 660L435 652V545L433 546L389 563H388L385 564L340 576H339H336V577L289 584H286L236 587H235L227 586L220 583L214 578L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L233 527L281 524L326 518L368 506L410 490L449 470L488 445L525 415L561 380L595 341L628 295L629 296L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM259 -261 293 -216 327 -177 363 -142 400 -112 435 -89V-187L436 -195L439 -202L444 -208L450 -213L458 -216L465 -217L473 -216L480 -213L487 -208L491 -202L494 -195L495 -187V-60L519 -51L562 -39L606 -32L654 -30L660 -29L667 -26L674 -21L678 -15L681 -8L683 0L681 8L678 15L674 21L667 26L660 29L653 30H651L602 28V27H599L551 20L548 19L502 7L499 6L455 -11L452 -12L409 -34L408 -35L406 -36L365 -63H366L363 -65V-64L324 -96L322 -98L284 -134V-135L283 -136H282L246 -178H247L245 -180V-179L240 -186L192 -91L191 -89L187 -83L180 -78L173 -75L165 -74L158 -75L150 -78L144 -83L139 -89L136 -97L135 -104L136 -112L139 -118H138L208 -257L209 -259L214 -265L220 -270L227 -273L235 -274L243 -273L250 -270L256 -265Z"/><path id="rg7" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78L908 86L905 93L900 100L894 104L886 107L879 108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V108H456V200L455 208L452 215L448 221L441 226L434 229L426 230L419 229L411 226L405 221L400 215L397 208L396 200V78L397 71L400 63L405 57L411 52L419 49L426 48H622V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM257 537H258L291 576L325 610L361 639L398 665L436 687L476 704L518 718L561 728L606 734L653 736L699 734L744 728L787 718L829 704L869 687L907 665L944 639L980 610L1014 576L1047 537H1048L1049 536L1055 531L1062 528L1070 527L1078 528L1085 531L1091 536L1096 542L1099 549L1100 557L1099 565L1096 572L1093 576L1059 616H1058L1057 618L1021 653L1019 655L982 686H981L979 688L940 715L938 716V717L897 740L894 741L852 760V759L849 761L805 775L803 776H802L756 787V786L753 787L706 793H703L654 796V795L653 796L651 795V796L602 793H599L552 787L549 786V787L503 776H502L500 775L456 761L453 759V760L411 741L408 740L367 717V716L365 715L326 688L324 686H323L286 655L284 653L248 618L247 616H246L212 576L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L235 527L243 528L250 531L256 536ZM676 852 711 897 747 937 784 971 823 1001 863 1026 905 1047 948 1063 992 1074 1039 1081 1089 1084 1095 1085 1103 1088 1109 1092 1113 1099 1116 1106 1117 1114 1116 1121 1113 1129 1109 1135 1103 1140 1095 1143 1087 1144 1086 1143V1144L1035 1141H1032L982 1134V1133H979L931 1121L928 1120L882 1103L879 1101V1102L835 1080V1079H833L832 1078L790 1051L787 1049V1050L746 1018H747L744 1016L705 980L704 979L703 978L666 936L665 934L664 935L629 888L627 885L624 878L623 870L624 862L627 855L631 849L637 844L645 841L653 840L660 841L667 844L674 849ZM1097 -257 1167 -118H1166L1169 -112L1170 -104L1169 -97L1166 -89L1161 -83L1155 -78L1147 -75L1140 -74L1132 -75L1125 -78L1118 -83L1114 -89L1113 -91L1065 -186L1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653L645 29L637 26L631 21L627 15L624 8L623 0L624 -8L627 -15L631 -21L637 -26L645 -29L651 -30L699 -32L743 -39L786 -51L827 -66L867 -87L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265L1096 -259Z"/></g>
    <radialGradient id="scrGlow" cx="1" cy="0" r="1"><stop offset="0" stop-color="#c778dd" stop-opacity=".22"/><stop offset="1" stop-color="#c778dd" stop-opacity="0"/></radialGradient>
    <pattern id="scan" width="2" height="2" patternUnits="userSpaceOnUse"><rect y="1" width="2" height="1" fill="#000" opacity=".16"/></pattern>
    <radialGradient id="crt" cx=".5" cy=".5" r=".75"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".4"/></radialGradient>
    <filter id="blur6" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
    <filter id="blur14" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14"/></filter>
    <clipPath id="winClip"><rect x="82" y="72" width="476" height="316" rx="3"/></clipPath>
    <mask id="darkMask">
      <rect x="-3000" y="-2000" width="7200" height="4400" fill="#fff"/>
      <circle id="mLamp" class="fx" cx="660" cy="400" r="360" fill="url(#holeG)" style="opacity:0"/>
      <circle id="mMon" cx="788" cy="376" r="290" fill="url(#holeG)" style="opacity:.6"/>
      <circle id="mWin" cx="320" cy="260" r="330" fill="url(#holeG)" style="opacity:.3"/>
      <circle id="mCandle" class="fx" cx="487" cy="350" r="110" fill="url(#holeG)" style="opacity:0"/>
    </mask>
  </defs>

  <!-- ===== wall & floor (extend far beyond the content so any screen is filled) ===== -->
  <rect x="-3000" y="-2000" width="7200" height="2526" fill="url(#wallG)"/>
  <rect x="-3000" y="-2000" width="7200" height="2526" fill="url(#paper)" opacity=".06"/>
  <rect x="-3000" y="414" width="7200" height="100" fill="#6a5792"/>
  <rect x="-3000" y="414" width="7200" height="100" fill="url(#panels)"/>
  <rect x="-3000" y="408" width="7200" height="10" fill="#8f7bb8"/><rect x="-3000" y="416" width="7200" height="3" fill="#000" opacity=".2"/>
  <rect x="-3000" y="510" width="7200" height="16" fill="#54417a"/><rect x="-3000" y="510" width="7200" height="3" fill="#ffffff" opacity=".12"/>
  <rect x="-3000" y="526" width="7200" height="1500" fill="url(#floorG)"/>
  <rect x="-3000" y="526" width="7200" height="1500" fill="url(#planks)"/>
  <rect x="-3000" y="526" width="7200" height="30" fill="url(#skirtG)"/>
  <rect x="-3000" y="-2000" width="7200" height="2526" fill="url(#wallLight)"/>

  <!-- rug & soft floor shadows -->
  <g id="shadows" filter="url(#blur6)" opacity=".5" fill="#000">
    <ellipse cx="795" cy="642" rx="250" ry="14"/><ellipse cx="1090" cy="612" rx="110" ry="9"/><ellipse cx="210" cy="694" rx="140" ry="9"/><ellipse cx="588" cy="617" rx="36" ry="6"/>
  </g>
  <ellipse cx="470" cy="650" rx="262" ry="46" fill="#5d3d7e"/><ellipse cx="470" cy="648" rx="250" ry="42" fill="#74509a"/><ellipse cx="470" cy="648" rx="206" ry="33" fill="none" stroke="#e8c7ff" stroke-opacity=".28" stroke-width="3"/><ellipse cx="470" cy="648" rx="160" ry="24" fill="none" stroke="#e8c7ff" stroke-opacity=".18" stroke-width="2" stroke-dasharray="3 7"/>

  <!-- ===== WINDOW (the star of the room) ===== -->
  <g class="obj" data-obj="window">
    <rect x="66" y="56" width="508" height="348" rx="10" fill="#f0e6d4" stroke="#cdbd9f" stroke-width="2"/>
    <g clip-path="url(#winClip)">
      <g transform="translate(82,72)">
        <!-- sky -->
        <g id="Lsky"><rect x="-50" y="-30" width="580" height="380" fill="url(#skyG)"/>
          <g id="stars"></g>
          <g id="celestial"></g>
          <g id="rare"></g>
          <g id="cloudsFar"></g>
        </g>
        <g id="Lfar"><path id="farRidge" class="tn" data-k=".9"/></g>
        <g id="Lmid"><path id="midRidge" class="tn" data-k=".6"/><g id="village"></g></g>
        <g id="Lvis"></g>
        <g id="Llake"><rect id="lake" x="-50" y="198" width="580" height="90" fill="url(#waterG)"/><g id="lakeFx"></g><g id="boat"></g></g>
        <g id="Lnear"><path id="nearRidge" class="tn" data-k=".15"/><g id="meadow"></g><g id="trees"></g></g>
        <g id="Lweather"><g id="cloudsNear"></g><rect id="fogRect" x="-50" y="60" width="580" height="260" fill="url(#fogG)" style="opacity:0"/><g id="precip"></g></g>
        <g id="Lfg"><g id="branch"></g><g id="particles"></g></g>
      </g>
      <polygon points="82,72 250,72 150,388 82,388" fill="#fff" opacity=".06"/><polygon points="270,72 300,72 200,388 170,388" fill="#fff" opacity=".05"/>
    </g>
    <rect x="316" y="72" width="8" height="316" fill="#efe3cf"/><rect x="82" y="226" width="476" height="8" fill="#efe3cf"/>
    <rect x="316" y="72" width="2" height="316" fill="#000" opacity=".12"/><rect x="82" y="232" width="476" height="2" fill="#000" opacity=".12"/>
    <rect x="54" y="388" width="532" height="16" rx="3" fill="#dccdb2"/><rect x="54" y="388" width="532" height="3" fill="#fff" opacity=".5"/>
  </g>
  <!-- sill things -->
  <g id="sillThings">
    <rect x="112" y="366" width="28" height="22" rx="3" fill="#c76a52"/><rect x="110" y="364" width="32" height="6" rx="2" fill="#d9806a"/>
    <g fill="#4d9b63"><ellipse cx="126" cy="356" rx="5" ry="12"/><ellipse cx="116" cy="360" rx="4" ry="9" transform="rotate(-25 116 360)"/><ellipse cx="136" cy="360" rx="4" ry="9" transform="rotate(25 136 360)"/></g>
    <rect x="480" y="362" width="14" height="26" rx="2" fill="#f4efe6"/><rect x="480" y="362" width="5" height="26" rx="2" fill="#fff" opacity=".4"/>
    <ellipse id="flame" class="flame fx" cx="487" cy="354" rx="3.4" ry="6" fill="#ffd36b" style="opacity:0"/>
  </g>
  <!-- curtains -->
  <rect x="26" y="44" width="588" height="9" rx="4" fill="#3a2d58"/><circle cx="26" cy="48" r="8" fill="#5b4890"/><circle cx="614" cy="48" r="8" fill="#5b4890"/>
  <g class="curt"><path d="M38 52H126L116 398Q82 408 38 398Z" fill="url(#curtG)"/><path d="M62 52L58 400M86 52L88 402M108 52L106 400" stroke="#000" stroke-opacity=".16" stroke-width="3" fill="none"/></g>
  <g class="curt" style="animation-delay:-3s"><path d="M514 52H602V398Q558 408 524 398Z" fill="url(#curtG)"/><path d="M536 52L534 400M558 52L562 402M582 52L580 400" stroke="#000" stroke-opacity=".16" stroke-width="3" fill="none"/></g>

  <!-- ===== CLOCK ===== -->
  <g class="obj" data-obj="clock">
    <circle cx="640" cy="144" r="52" fill="#000" opacity=".2" transform="translate(4,6)"/>
    <circle cx="640" cy="140" r="52" fill="#f4efe6" stroke="#4b3a66" stroke-width="7"/><circle cx="640" cy="140" r="46" fill="none" stroke="#000" stroke-opacity=".08" stroke-width="2"/>
    <g id="ticks" stroke="#4b3a66" stroke-width="3" stroke-linecap="round"></g>
    <line id="hHand" x1="640" y1="140" x2="640" y2="112" stroke="#2a2548" stroke-width="5" stroke-linecap="round"/>
    <line id="mHand" x1="640" y1="140" x2="640" y2="98" stroke="#2a2548" stroke-width="3" stroke-linecap="round"/>
    <circle cx="640" cy="140" r="5" fill="#c778dd"/>
  </g>

  <!-- ===== CORKBOARD ===== -->
  <g class="obj" data-obj="cork">
    <rect x="700" y="82" width="236" height="190" rx="6" fill="#000" opacity=".2" transform="translate(4,6)"/>
    <rect x="696" y="76" width="244" height="198" rx="6" fill="#6b4a35"/><rect x="706" y="86" width="224" height="178" rx="3" fill="#bb8a58"/>
    <g id="corkDots"></g>
    <g font-family="ui-monospace,Menlo,monospace" font-size="12" fill="#2a2548">
      <g transform="rotate(-4 758 134)"><rect x="718" y="104" width="86" height="58" fill="#fff3a8"/><text x="727" y="130">ERC-4337</text><text x="727" y="148">wallet</text></g>
      <g transform="rotate(5 880 130)"><rect x="840" y="102" width="78" height="62" fill="#ffc9dd"/><text x="848" y="128">guardians</text><text x="848" y="146">= hidden</text></g>
      <g transform="rotate(-2 800 220)"><rect x="744" y="190" width="108" height="60" fill="#c9f0e0"/><text x="754" y="216">zk-proof</text><text x="754" y="234">on-chain</text></g>
    </g>
    <path d="M762 112L880 112L800 192" fill="none" stroke="#d94a4a" stroke-width="2"/><g fill="#d94a4a"><circle cx="762" cy="112" r="4"/><circle cx="880" cy="112" r="4"/><circle cx="800" cy="192" r="4"/></g>
  </g>

  <!-- ===== BOOKSHELF + TABLET ===== -->
  <g class="obj" data-obj="shelf">
    <rect x="1010" y="44" width="166" height="568" rx="5" fill="#000" opacity=".2" transform="translate(5,6)"/>
    <rect x="1010" y="44" width="166" height="568" rx="5" fill="url(#shelfG)"/><rect x="1022" y="56" width="142" height="544" fill="#4e3222"/>
    <g fill="#8a5a3a"><rect x="1014" y="188" width="158" height="13"/><rect x="1014" y="328" width="158" height="13"/><rect x="1014" y="468" width="158" height="13"/><rect x="1014" y="598" width="158" height="14"/></g>
    <g fill="#fff" opacity=".18"><rect x="1014" y="188" width="158" height="3"/><rect x="1014" y="328" width="158" height="3"/><rect x="1014" y="468" width="158" height="3"/></g>
    <g id="books"></g>
  </g>
  <g class="obj" data-obj="tablet" transform="rotate(-4 1090 280)">
    <rect x="1048" y="214" width="84" height="108" rx="10" fill="#000" opacity=".25" transform="translate(3,3)"/>
    <rect x="1048" y="214" width="84" height="108" rx="10" fill="#8f8a96"/><rect x="1048" y="214" width="84" height="108" rx="10" fill="none" stroke="#6c6773" stroke-width="3"/>
    <g><use href="#rg0" transform="translate(1058.9,236.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg1" transform="translate(1084.9,236.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg2" transform="translate(1110.9,236.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg3" transform="translate(1058.9,266.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg4" transform="translate(1084.9,266.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg5" transform="translate(1110.9,266.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg6" transform="translate(1071.9,296.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg7" transform="translate(1097.9,296.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg0" transform="translate(1058,236) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg1" transform="translate(1084,236) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg2" transform="translate(1110,236) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg3" transform="translate(1058,266) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg4" transform="translate(1084,266) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg5" transform="translate(1110,266) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg6" transform="translate(1071,296) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg7" transform="translate(1097,296) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/></g>
  </g>

  <!-- ===== DESK ===== -->
  <g class="obj" data-obj="desk">
    <rect x="612" y="464" width="16" height="176" fill="#a8744a"/><rect x="962" y="464" width="16" height="176" fill="#a8744a"/>
    <rect x="860" y="476" width="118" height="150" fill="#b98258"/><rect x="870" y="488" width="98" height="52" rx="3" fill="#a8744a"/><rect x="870" y="550" width="98" height="52" rx="3" fill="#a8744a"/>
    <rect x="910" y="510" width="18" height="6" rx="3" fill="#5e3d29"/><rect x="910" y="572" width="18" height="6" rx="3" fill="#5e3d29"/>
    <rect x="590" y="440" width="410" height="26" rx="5" fill="url(#woodG)"/><rect x="590" y="440" width="410" height="4" rx="2" fill="#fff" opacity=".4"/><rect x="598" y="464" width="394" height="10" fill="#a8744a"/>
    <!-- monitor -->
    <rect x="780" y="428" width="16" height="12" fill="#2a2548"/><rect x="758" y="436" width="60" height="5" rx="2.5" fill="#2a2548"/>
    <rect x="700" y="316" width="176" height="114" rx="9" fill="#1c1830"/><rect x="708" y="324" width="160" height="96" rx="3" fill="#13162c"/>
    <g id="code"></g>
    <polygon points="708,324 800,324 740,420 708,420" fill="#fff" opacity=".04"/>
    <rect x="738" y="446" width="100" height="7" rx="3" fill="#2a2548"/>
    <!-- mug -->
    <rect x="958" y="414" width="26" height="26" rx="4" fill="#f4efe6"/><path d="M984 421h7a6 6 0 0 1 0 13h-7" fill="none" stroke="#f4efe6" stroke-width="4"/>
    <g stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none" opacity=".6"><path class="steam" d="M966 408q-4-6 0-12"/><path class="steam" style="animation-delay:-1.2s" d="M976 408q4-6 0-12"/></g>
  </g>
  <g class="obj" data-obj="phone"><rect x="846" y="434" width="34" height="6" rx="3" fill="#1c1830"/><rect x="849" y="435" width="20" height="3.5" rx="1.5" fill="#4b6fd0"/><circle class="notif" cx="877" cy="434" r="4" fill="#ff6b8a"/></g>
  <g class="obj" data-obj="notebook">
    <polygon points="888,441 944,441 938,427 894,427" fill="#c0504d"/><polygon points="888,441 944,441 944,444 888,444" fill="#f4efe6"/>
    <text x="916" y="437" font-family="Georgia,serif" font-size="7" font-weight="700" fill="#f4e6c8" text-anchor="middle">about me</text>
  </g>
  <!-- lamp -->
  <g class="obj" data-obj="lamp">
    <ellipse cx="626" cy="440" rx="30" ry="6" fill="#2a2548"/>
    <path d="M626 436L620 396L660 360" fill="none" stroke="#2a2548" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <polygon id="shade" points="642,334 682,340 706,376 622,372" fill="#e9b44c"/><polygon points="622,372 706,376 702,380 626,378" fill="#b88a2a"/><polygon points="642,334 662,337 650,372 622,372" fill="#fff" opacity=".18"/>
    <ellipse id="bulb" class="fx" cx="664" cy="380" rx="28" ry="7" fill="#fff6c0" style="opacity:0"/>
  </g>

  <!-- ===== CARO TABLE ===== -->
  <g class="obj" data-obj="board">
    <rect x="86" y="604" width="250" height="16" rx="3" fill="url(#woodG)"/><rect x="104" y="620" width="12" height="72" fill="#a8744a"/><rect x="306" y="620" width="12" height="72" fill="#a8744a"/>
    <polygon points="112,604 310,604 288,566 134,566" fill="#ecdcae"/>
    <g stroke="#6b4a35" stroke-width="1.4"><path d="M134 566L112 604M157 566L141 604M180 566L170 604M203 566L199 604M226 566L228 604M249 566L257 604M272 566L286 604M288 566L310 604"/><path d="M123 585H299M128 575H294M118 595H304"/></g>
    <g stroke-width="3" stroke-linecap="round" fill="none"><path d="M176 572l8 8M184 572l-8 8" stroke="#2a2548"/><path d="M232 590l8 8M240 590l-8 8" stroke="#2a2548"/><circle cx="208" cy="583" r="5" stroke="#c0392b"/><circle cx="252" cy="575" r="4" stroke="#c0392b"/></g>
  </g>
  <!-- plant -->
  <g><path d="M566 572h44l-6 42h-32z" fill="#c76a52"/><path d="M566 572h44l-1 6h-42z" fill="#d9806a"/><g fill="#3c8a5a"><ellipse cx="588" cy="540" rx="10" ry="34"/><ellipse cx="572" cy="550" rx="9" ry="28" transform="rotate(-30 572 550)"/><ellipse cx="604" cy="550" rx="9" ry="28" transform="rotate(30 604 550)"/><ellipse cx="582" cy="552" rx="6" ry="22" fill="#4aa56a" transform="rotate(-12 582 552)"/></g></g>
  <!-- cat -->
  <g id="cat"><g class="breathe"><ellipse cx="520" cy="664" rx="44" ry="17" fill="#d9a066"/><ellipse cx="520" cy="672" rx="44" ry="8" fill="#000" opacity=".1"/></g>
    <circle cx="474" cy="660" r="15" fill="#d9a066"/><polygon points="463,650 468,634 477,648" fill="#d9a066"/><polygon points="479,648 488,634 492,652" fill="#d9a066"/>
    <path d="M562 668q26-4 14-28" fill="none" stroke="#d9a066" stroke-width="8" stroke-linecap="round"/><path d="M468 661q3 3 6 0M480 661q3 3 6 0" stroke="#4a3a2a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <g id="zz" class="fx" font-family="ui-monospace,monospace" font-weight="700" fill="#e8dcff" style="opacity:0"><text class="zz" x="486" y="640" font-size="16">z</text><text class="zz" style="animation-delay:-1.6s" x="498" y="628" font-size="12">z</text></g></g>

  <!-- ===== LIGHT: window shaft, dust, golden hour ===== -->
  <g id="shaftG0" style="mix-blend-mode:screen" class="fx" filter="url(#blur14)">
    <g id="shaftSkew"><polygon points="82,390 316,390 330,760 52,760" fill="url(#shaftG)"/><polygon points="324,390 558,390 620,760 340,760" fill="url(#shaftG)"/></g>
  </g>
  <g id="motes" fill="#fff6d0" class="fx"></g>
  <rect id="golden" class="fx" x="-3000" y="-2000" width="7200" height="4400" fill="#ff9a4d" style="opacity:0;mix-blend-mode:soft-light"/>

  <!-- ===== LIGHT: night ===== -->
  <rect id="dark" x="-3000" y="-2000" width="7200" height="4400" fill="#05041a" mask="url(#darkMask)" style="opacity:0"/>
  <g style="mix-blend-mode:screen">
    <polygon id="cone" class="fx" points="630,382 696,382 706,442 592,442" fill="url(#coneG)" style="opacity:0"/>
    <circle id="gLamp" class="fx" cx="664" cy="384" r="170" fill="url(#warmG)" style="opacity:0"/>
    <circle id="gMon" cx="788" cy="376" r="230" fill="url(#blueG)" style="opacity:0"/>
    <circle id="gCandle" class="fx" cx="487" cy="356" r="60" fill="url(#warmG)" style="opacity:0"/>
  </g>

  <g id="hots"></g>
</svg>
<div id="vig"></div>
<div id="tip"></div>

<div class="hud" id="brand"><b class="mono">peter<span style="color:var(--accent)">.</span>present</b><span id="today"></span></div>
<button class="hud" id="aboutBtn" type="button">About me</button>
<div class="hud" id="panhint">← drag to look around →</div>
<div class="hud" id="bar">
  <span class="t" id="tt">--:--</span><span class="ph" id="ph"></span>
  <input id="slider" type="range" min="0" max="24" step="0.05" aria-label="Time of day">
  <button id="nowBtn" class="on" type="button">Now</button>
  <span class="sep"></span>
  <button id="dPrev" type="button" aria-label="Previous day">‹</button>
  <input id="dateIn" type="date" aria-label="Date">
  <button id="dNext" type="button" aria-label="Next day">›</button>
</div>

<aside id="panel" role="dialog" aria-labelledby="ptitle"><button id="close" aria-label="Close">✕</button><div id="pbody" class="body"></div></aside>
<div id="welcome"><div class="card body" id="wbody"></div></div>`;
