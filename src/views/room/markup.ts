// Static scene markup (SVG room + HUD), ported from the concept file.
export const ROOM_HTML = `<svg id="scene" viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid meet" role="img" aria-label="A cosy room whose window shows today's world">
  <defs>
    <linearGradient id="wallG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7f6baa"/><stop offset=".6" stop-color="#9884c0"/><stop offset="1" stop-color="#8672b0"/></linearGradient>
    <radialGradient id="wallLight" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#ffffff" stop-opacity=".16"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
    <linearGradient id="floorG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a5f40"/><stop offset=".25" stop-color="#b08256"/><stop offset="1" stop-color="#8a5f40"/></linearGradient>
    <linearGradient id="skirtG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
    <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1"><stop id="sk0" offset="0" stop-color="#3b8fe0"/><stop id="sk1" offset="1" stop-color="#a7d8f5"/></linearGradient>
    <linearGradient id="curtG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7a3a2c"/><stop offset=".25" stop-color="#b85d45"/><stop offset=".5" stop-color="#97442f"/><stop offset=".75" stop-color="#b85d45"/><stop offset="1" stop-color="#7a3a2c"/></linearGradient>
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
    <linearGradient id="clayG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9a4a2a"/><stop offset=".35" stop-color="#cc6a40"/><stop offset="1" stop-color="#8e4326"/></linearGradient>
    <radialGradient id="floorPool"><stop offset="0" stop-color="#ffd48c" stop-opacity=".5"/><stop offset=".55" stop-color="#ffc47a" stop-opacity=".16"/><stop offset="1" stop-color="#ffc47a" stop-opacity="0"/></radialGradient>
    <radialGradient id="ffG"><stop offset="0" stop-color="#ffe49a" stop-opacity=".9"/><stop offset=".35" stop-color="#ffc860" stop-opacity=".35"/><stop offset="1" stop-color="#ffc860" stop-opacity="0"/></radialGradient>
    <pattern id="planks" width="260" height="42" patternUnits="userSpaceOnUse" x="0" y="526"><rect width="260" height="42" fill="none"/><path d="M0 41.5H260" stroke="#000" stroke-opacity=".2" stroke-width="2"/></pattern>
    <g id="runes"><path id="rg0" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78L908 86L905 93L900 100L894 104L886 107L879 108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM676 296 677 295 710 341 744 380 780 415 817 445 856 470 895 490 937 506 979 518 1024 524 1072 527 1078 528 1085 531 1091 536 1096 542 1099 549 1100 557 1099 565 1096 572 1091 578 1085 583 1078 586 1070 587H1069L1019 584H1016L969 577V576H966H965L920 564L917 563H916L872 546L869 544L827 523V522H825L824 521L783 494L781 492L741 461H742L739 459L702 422H701L700 420V421L664 379L663 377L628 331H629L627 328L624 321L623 313L624 305L627 298L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM676 852 711 897 747 937 784 971 823 1001 863 1026 905 1047 948 1063 992 1074 1039 1081 1089 1084 1095 1085 1103 1088 1109 1092 1113 1099 1116 1106 1117 1114 1116 1121 1113 1129 1109 1135 1103 1140 1095 1143 1087 1144 1086 1143V1144L1035 1141H1032L982 1134V1133H979L931 1121L928 1120L882 1103L879 1101V1102L835 1080V1079H833L832 1078L790 1051L787 1049V1050L746 1018H747L744 1016L705 980L704 979L703 978L666 936L665 934L664 935L629 888L627 885L624 878L623 870L624 862L627 855L631 849L637 844L645 841L653 840L660 841L667 844L674 849ZM1096 -259 1099 -251 1100 -244 1099 -236 1096 -229 1094 -226 1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653L645 29L637 26L631 21L627 15L624 8L623 0L624 -8L627 -15L631 -21L637 -26L645 -29L651 -30L699 -32L743 -39L786 -51L827 -66L867 -87L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265Z"/><path id="rg1" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78L908 86L905 93L900 100L894 104L886 107L879 108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V108H456V200L455 208L452 215L448 221L441 226L434 229L426 230L419 229L411 226L405 221L400 215L397 208L396 200V78L397 71L400 63L405 57L411 52L419 49L426 48H622V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM678 298 681 305 683 313 681 321 678 328 676 331H677L642 377L641 379L605 421V420L604 422H603L566 459L563 461H564L524 492L522 494L495 512V652L494 660L491 668L486 674L480 678L472 681L465 682L457 681L450 678L443 674L439 668L436 660L435 652V545L433 546L389 563H388L385 564L340 576H339H336V577L289 584H286L236 587H235L227 586L220 583L214 578L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L233 527L281 524L326 518L368 506L410 490L449 470L488 445L525 415L561 380L595 341L628 295L629 296L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM259 -261 293 -216 327 -177 363 -142 400 -112 435 -89V-187L436 -195L439 -202L444 -208L450 -213L458 -216L465 -217L473 -216L480 -213L487 -208L491 -202L494 -195L495 -187V-60L519 -51L562 -39L606 -32L653 -30L699 -32L743 -39L786 -51L810 -60V-187L811 -195L814 -202L818 -208L825 -213L832 -216L840 -217L847 -216L855 -213L861 -208L866 -202L869 -195L870 -187V-89L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265L1096 -259L1099 -251L1100 -244L1099 -236L1096 -229L1094 -226L1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653H651L602 28V27H599L551 20L548 19L502 7L499 6L455 -11L452 -12L409 -34L408 -35L406 -36L365 -63H366L363 -65V-64L324 -96L322 -98L284 -134V-135L283 -136H282L246 -178H247L245 -180V-179L211 -226L209 -229L206 -236L205 -244L206 -251L209 -259L214 -265L220 -270L227 -273L235 -274L243 -273L250 -270L256 -265Z"/><path id="rg2" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78L908 86L905 93L900 100L894 104L886 107L879 108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM678 298 681 305 683 313 681 321 678 328 676 331H677L642 377L641 379L605 421V420L604 422H603L566 459L563 461H564L524 492L522 494L481 521L480 522H478V523L436 544L433 546L389 563H388L385 564L340 576H339H336V577L289 584H286L236 587H235L227 586L220 583L214 578L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L233 527L281 524L326 518L368 506L410 490L449 470L488 445L525 415L561 380L595 341L628 295L629 296L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM678 -311 681 -304 683 -296V-32H699L743 -39L786 -51L827 -66L867 -87L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265L1096 -259L1097 -257L1167 -118H1166L1169 -112L1170 -104L1169 -97L1166 -89L1161 -83L1155 -78L1147 -75L1140 -74L1132 -75L1125 -78L1118 -83L1114 -89L1113 -91L1065 -186L1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653L645 29L637 26L631 21L627 15L624 8L623 0V-296L624 -304L627 -311L631 -317L637 -322L645 -325L653 -326L660 -325L667 -322L674 -317Z"/><path id="rg3" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78V200L908 208L905 215L900 221L894 226L886 229L879 230L871 229L864 226L857 221L853 215L850 208L849 200V108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM257 537H258L291 576L325 610L361 639L398 665L436 687L476 704L518 718L561 728L606 734L654 736L660 737L667 740L674 744L678 751L681 758L683 766L681 773L678 781L674 787L667 792L660 795L653 796L651 795V796L602 793H599L552 787L549 786V787L503 776H502L500 775L456 761L453 759V760L411 741L408 740L367 717V716L365 715L326 688L324 686H323L286 655L284 653L248 618L247 616H246L212 576L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L235 527L243 528L250 531L256 536ZM676 852 711 897 747 937 784 971 823 1001 863 1026 905 1047 948 1063 992 1074 1039 1081 1089 1084 1095 1085 1103 1088 1109 1092 1113 1099 1116 1106 1117 1114 1116 1121 1113 1129 1109 1135 1103 1140 1095 1143 1087 1144 1086 1143V1144L1035 1141H1032L982 1134V1133H979L931 1121L928 1120L882 1103L879 1101V1102L835 1080V1079H833L832 1078L790 1051L787 1049V1050L746 1018H747L744 1016L705 980L704 979L703 978L683 955V1131L681 1139L678 1146L674 1152L667 1157L660 1160L653 1161L645 1160L637 1157L631 1152L627 1146L624 1139L623 1131V870L624 862L627 855L631 849L637 844L645 841L653 840L660 841L667 844L674 849ZM259 -261 293 -216 327 -177 363 -142 400 -112 435 -89V-187L436 -195L439 -202L444 -208L450 -213L458 -216L465 -217L473 -216L480 -213L487 -208L491 -202L494 -195L495 -187V-60L519 -51L562 -39L606 -32L653 -30L699 -32L743 -39L786 -51L810 -60V-187L811 -195L814 -202L818 -208L825 -213L832 -216L840 -217L847 -216L855 -213L861 -208L866 -202L869 -195L870 -187V-89L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265L1096 -259L1099 -251L1100 -244L1099 -236L1096 -229L1094 -226L1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653H651L602 28V27H599L551 20L548 19L502 7L499 6L455 -11L452 -12L409 -34L408 -35L406 -36L365 -63H366L363 -65V-64L324 -96L322 -98L284 -134V-135L283 -136H282L246 -178H247L245 -180V-179L211 -226L209 -229L206 -236L205 -244L206 -251L209 -259L214 -265L220 -270L227 -273L235 -274L243 -273L250 -270L256 -265Z"/><path id="rg4" d="M678 -15 681 -8 682 0V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V108H456V200L455 208L452 215L448 221L441 226L434 229L426 230L419 229L411 226L405 221L400 215L397 208L396 200V78L397 71L400 63L405 57L411 52L419 49L426 48H622V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM676 296 677 295 710 341 744 380 780 415 817 445 856 470 895 490 937 506 979 518 1024 524 1072 527 1078 528 1085 531 1091 536 1096 542 1099 549 1100 557 1099 565 1096 572 1091 578 1085 583 1078 586 1070 587H1069L1019 584H1016L969 577V576H966H965L920 564L917 563H916L872 546L869 544L827 523V522H825L824 521L783 494L781 492L741 461H742L739 459L702 422H701L700 420V421L664 379L663 377L653 364L642 377L641 379L605 421V420L604 422H603L566 459L563 461H564L524 492L522 494L481 521L480 522H478V523L436 544L433 546L389 563H388L385 564L340 576H339H336V577L289 584H286L236 587H235L227 586L220 583L214 578L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L233 527L281 524L326 518L368 506L410 490L449 470L488 445L525 415L561 380L595 341L628 295L629 296L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM1096 -259 1099 -251 1100 -244 1099 -236 1096 -229 1094 -226 1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653L645 29L637 26L631 21L627 15L624 8L623 0L624 -8L627 -15L631 -21L637 -26L645 -29L651 -30L699 -32L743 -39L786 -51L827 -66L867 -87L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265Z"/><path id="rg5" d="M678 -15 681 -8 682 0V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM678 298 681 305 683 313 681 321 678 328 676 331H677L642 377L641 379L605 421V420L604 422H603L566 459L563 461H564L524 492L522 494L495 512V652L494 660L491 668L486 674L480 678L472 681L465 682L457 681L450 678L443 674L439 668L436 660L435 652V545L433 546L389 563H388L385 564L340 576H339H336V577L289 584H286L236 587H235L227 586L220 583L214 578L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L233 527L281 524L326 518L368 506L410 490L449 470L488 445L525 415L561 380L595 341L628 295L629 296L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM676 852 711 897 747 937 784 971 823 1001 863 1026 905 1047 948 1063 992 1074 1039 1081 1089 1084 1095 1085 1103 1088 1109 1092 1113 1099 1116 1106 1117 1114 1116 1121 1113 1129 1109 1135 1103 1140 1095 1143 1087 1144 1086 1143V1144L1035 1141H1032L982 1134V1133H979L931 1121L928 1120L882 1103L879 1101V1102L835 1080V1079H833L832 1078L790 1051L787 1049V1050L746 1018H747L744 1016L705 980L704 979L703 978L666 936L665 934L664 935L629 888L627 885L624 878L623 870L624 862L627 855L631 849L637 844L645 841L653 840L660 841L667 844L674 849ZM259 -261 293 -216 327 -177 363 -142 400 -112 435 -89V-187L436 -195L439 -202L444 -208L450 -213L458 -216L465 -217L473 -216L480 -213L487 -208L491 -202L494 -195L495 -187V-60L519 -51L562 -39L606 -32L654 -30L660 -29L667 -26L674 -21L678 -15L681 -8L683 0L681 8L678 15L674 21L667 26L660 29L653 30H651L602 28V27H599L551 20L548 19L502 7L499 6L455 -11L452 -12L409 -34L408 -35L406 -36L365 -63H366L363 -65V-64L324 -96L322 -98L284 -134V-135L283 -136H282L246 -178H247L245 -180V-179L240 -186L192 -91L191 -89L187 -83L180 -78L173 -75L165 -74L158 -75L150 -78L144 -83L139 -89L136 -97L135 -104L136 -112L139 -118H138L208 -257L209 -259L214 -265L220 -270L227 -273L235 -274L243 -273L250 -270L256 -265Z"/><path id="rg6" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78L908 86L905 93L900 100L894 104L886 107L879 108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V108H456V200L455 208L452 215L448 221L441 226L434 229L426 230L419 229L411 226L405 221L400 215L397 208L396 200V78L397 71L400 63L405 57L411 52L419 49L426 48H622V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM676 296 677 295 710 341 744 380 780 415 817 445 856 470 895 490 937 506 979 518 1024 524 1072 527 1078 528 1085 531 1091 536 1096 542 1099 549 1100 557 1099 565 1096 572 1091 578 1085 583 1078 586 1070 587H1069L1019 584H1016L969 577V576H966H965L920 564L917 563H916L872 546L869 544L827 523V522H825L824 521L783 494L781 492L741 461H742L739 459L702 422H701L700 420V421L664 379L663 377L653 364L642 377L641 379L605 421V420L604 422H603L566 459L563 461H564L524 492L522 494L495 512V652L494 660L491 668L486 674L480 678L472 681L465 682L457 681L450 678L443 674L439 668L436 660L435 652V545L433 546L389 563H388L385 564L340 576H339H336V577L289 584H286L236 587H235L227 586L220 583L214 578L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L233 527L281 524L326 518L368 506L410 490L449 470L488 445L525 415L561 380L595 341L628 295L629 296L631 292L637 287L645 284L653 283L660 284L667 287L674 292ZM259 -261 293 -216 327 -177 363 -142 400 -112 435 -89V-187L436 -195L439 -202L444 -208L450 -213L458 -216L465 -217L473 -216L480 -213L487 -208L491 -202L494 -195L495 -187V-60L519 -51L562 -39L606 -32L654 -30L660 -29L667 -26L674 -21L678 -15L681 -8L683 0L681 8L678 15L674 21L667 26L660 29L653 30H651L602 28V27H599L551 20L548 19L502 7L499 6L455 -11L452 -12L409 -34L408 -35L406 -36L365 -63H366L363 -65V-64L324 -96L322 -98L284 -134V-135L283 -136H282L246 -178H247L245 -180V-179L240 -186L192 -91L191 -89L187 -83L180 -78L173 -75L165 -74L158 -75L150 -78L144 -83L139 -89L136 -97L135 -104L136 -112L139 -118H138L208 -257L209 -259L214 -265L220 -270L227 -273L235 -274L243 -273L250 -270L256 -265Z"/><path id="rg7" d="M678 -15 681 -8 682 0V48H879L886 49L894 52L900 57L905 63L908 71L909 78L908 86L905 93L900 100L894 104L886 107L879 108H682V870L681 878L678 885L674 891L668 896L660 899L652 900L645 899L638 896L631 891L627 885L624 878L622 870V108H456V200L455 208L452 215L448 221L441 226L434 229L426 230L419 229L411 226L405 221L400 215L397 208L396 200V78L397 71L400 63L405 57L411 52L419 49L426 48H622V0L624 -8L627 -15L631 -21L638 -26L645 -29L652 -30L660 -29L668 -26L674 -21ZM257 537H258L291 576L325 610L361 639L398 665L436 687L476 704L518 718L561 728L606 734L653 736L699 734L744 728L787 718L829 704L869 687L907 665L944 639L980 610L1014 576L1047 537H1048L1049 536L1055 531L1062 528L1070 527L1078 528L1085 531L1091 536L1096 542L1099 549L1100 557L1099 565L1096 572L1093 576L1059 616H1058L1057 618L1021 653L1019 655L982 686H981L979 688L940 715L938 716V717L897 740L894 741L852 760V759L849 761L805 775L803 776H802L756 787V786L753 787L706 793H703L654 796V795L653 796L651 795V796L602 793H599L552 787L549 786V787L503 776H502L500 775L456 761L453 759V760L411 741L408 740L367 717V716L365 715L326 688L324 686H323L286 655L284 653L248 618L247 616H246L212 576L209 572L206 565L205 557L206 549L209 542L214 536L220 531L227 528L235 527L243 528L250 531L256 536ZM676 852 711 897 747 937 784 971 823 1001 863 1026 905 1047 948 1063 992 1074 1039 1081 1089 1084 1095 1085 1103 1088 1109 1092 1113 1099 1116 1106 1117 1114 1116 1121 1113 1129 1109 1135 1103 1140 1095 1143 1087 1144 1086 1143V1144L1035 1141H1032L982 1134V1133H979L931 1121L928 1120L882 1103L879 1101V1102L835 1080V1079H833L832 1078L790 1051L787 1049V1050L746 1018H747L744 1016L705 980L704 979L703 978L666 936L665 934L664 935L629 888L627 885L624 878L623 870L624 862L627 855L631 849L637 844L645 841L653 840L660 841L667 844L674 849ZM1097 -257 1167 -118H1166L1169 -112L1170 -104L1169 -97L1166 -89L1161 -83L1155 -78L1147 -75L1140 -74L1132 -75L1125 -78L1118 -83L1114 -89L1113 -91L1065 -186L1060 -179V-180L1058 -178H1059L1023 -136H1022L1021 -135V-134L983 -98L981 -96L942 -64V-65L939 -63H940L899 -36L897 -35L896 -34L853 -12L850 -11L806 6L803 7L757 19L754 20L706 27H703V28L654 30H653L645 29L637 26L631 21L627 15L624 8L623 0L624 -8L627 -15L631 -21L637 -26L645 -29L651 -30L699 -32L743 -39L786 -51L827 -66L867 -87L905 -112L942 -142L978 -177L1012 -216L1046 -261L1049 -265L1055 -270L1062 -273L1070 -274L1078 -273L1085 -270L1091 -265L1096 -259Z"/></g>
    <radialGradient id="scrGlow" cx="1" cy="0" r="1"><stop offset="0" stop-color="#c778dd" stop-opacity=".22"/><stop offset="1" stop-color="#c778dd" stop-opacity="0"/></radialGradient>
    <pattern id="scan" width="2" height="2" patternUnits="userSpaceOnUse"><rect y="1" width="2" height="1" fill="#000" opacity=".16"/></pattern>
    <radialGradient id="crt" cx=".5" cy=".5" r=".75"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".4"/></radialGradient>
    <filter id="glowF" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.2"/></filter>
    <radialGradient id="moonG"><stop offset="0" stop-color="#fff3d0"/><stop offset=".75" stop-color="#ffd27a"/><stop offset="1" stop-color="#e8a63c"/></radialGradient>
    <radialGradient id="moonHalo"><stop offset="0" stop-color="#ffc860" stop-opacity=".4"/><stop offset="1" stop-color="#ffc860" stop-opacity="0"/></radialGradient>
    <linearGradient id="ufoG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef2fa"/><stop offset=".55" stop-color="#a5afc6"/><stop offset="1" stop-color="#6c7794"/></linearGradient>
    <linearGradient id="ufoBeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9ffe3" stop-opacity=".55"/><stop offset="1" stop-color="#b9ffe3" stop-opacity="0"/></linearGradient>
    <radialGradient id="ufoHalo"><stop offset="0" stop-color="#9dffd8" stop-opacity=".55"/><stop offset="1" stop-color="#9dffd8" stop-opacity="0"/></radialGradient>
    <linearGradient id="rimG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0cf8c"/><stop offset=".5" stop-color="#b98a45"/><stop offset="1" stop-color="#6e4a22"/></linearGradient>
    <radialGradient id="faceG"><stop offset="0" stop-color="#fffaf0"/><stop offset=".8" stop-color="#f1e8d2"/><stop offset="1" stop-color="#d9ccae"/></radialGradient>
    <linearGradient id="woodFrameG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a5f3b"/><stop offset=".5" stop-color="#6b4a35"/><stop offset="1" stop-color="#4a3022"/></linearGradient>
    <radialGradient id="corkG" cx=".45" cy=".4" r=".85"><stop offset="0" stop-color="#cb9a64"/><stop offset=".7" stop-color="#b98a58"/><stop offset="1" stop-color="#a47647"/></radialGradient>
    <linearGradient id="paperSh" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".08"/></linearGradient>
    <filter id="soft2" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.8"/></filter>
    <clipPath id="phA"><rect x="720" y="190" width="38" height="36"/></clipPath>
    <g id="hood"><path d="M-11 34Q-11 14-5 7Q-9 3-8-5Q-6-15 0-15Q6-15 8-5Q9 3 5 7Q11 14 11 34Z" fill="#4b3a66"/><ellipse cx="0" cy="-3" rx="4.6" ry="5.4" fill="#120f26"/></g>
    <linearGradient id="shelfBackG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2418"/><stop offset="1" stop-color="#52362a"/></linearGradient>
    <linearGradient id="sideShL" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".4"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
    <linearGradient id="sideShR" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".4"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
    <linearGradient id="shelfLightG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffd9a8" stop-opacity=".13"/><stop offset="1" stop-color="#000" stop-opacity=".16"/></linearGradient>
    <linearGradient id="boardG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b27a50"/><stop offset=".5" stop-color="#8a5a3a"/><stop offset="1" stop-color="#6a4129"/></linearGradient>
    <linearGradient id="boardShG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".38"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
    <linearGradient id="paperG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7ecc4"/><stop offset="1" stop-color="#e3cf9c"/></linearGradient>
    <radialGradient id="rugG" cx=".5" cy=".45" r=".62"><stop offset="0" stop-color="#77529f"/><stop offset="1" stop-color="#5f3f85"/></radialGradient>
    <clipPath id="rugClip"><ellipse cx="470" cy="648" rx="248" ry="41"/></clipPath>
    <linearGradient id="brassG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3d58b"/><stop offset="1" stop-color="#b8892f"/></linearGradient>
    <linearGradient id="bezelG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34305a"/><stop offset="1" stop-color="#17152c"/></linearGradient>
    <linearGradient id="mugG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fffdf6"/><stop offset=".6" stop-color="#f1ebdb"/><stop offset="1" stop-color="#d6cfbd"/></linearGradient>
    <filter id="blur6" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
    <filter id="blur14" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14"/></filter>
    <clipPath id="winClip"><rect x="82" y="72" width="476" height="316" rx="3"/></clipPath>
    <mask id="darkMask">
      <rect x="-3000" y="-2000" width="7200" height="4400" fill="#fff"/>
      <circle id="mLamp" class="fx" cx="660" cy="400" r="360" fill="url(#holeG)" style="opacity:0"/>
      <circle id="mMon" cx="788" cy="376" r="290" fill="url(#holeG)" style="opacity:.6"/>
      <circle id="mWin" cx="320" cy="260" r="330" fill="url(#holeG)" style="opacity:.3"/>
      <circle id="mCeil" class="fx" cx="600" cy="260" r="1500" fill="url(#holeG)" style="opacity:0"/>
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
  <g id="floorDeco" pointer-events="none"></g>
  <g id="floorSun" style="opacity:0;mix-blend-mode:screen" filter="url(#blur6)"><g id="floorSunSkew"><polygon points="82,526 316,526 340,830 40,830" fill="#ffe9b0" opacity=".55"/><polygon points="324,526 558,526 640,830 350,830" fill="#ffe9b0" opacity=".55"/></g></g>
  <g id="floorLeaves" pointer-events="none"></g>
  <g id="slippers" pointer-events="none" transform="translate(30 -52)"><ellipse cx="884" cy="746" rx="40" ry="7" fill="#000" opacity=".22"/><g transform="translate(868 742) rotate(-8)"><ellipse rx="17" ry="7.5" fill="#b9566a"/><ellipse cx="5" cy="-.6" rx="10" ry="4.4" fill="#4a2230"/><ellipse rx="17" ry="7.5" fill="none" stroke="#f2dfe6" stroke-width="1.6" stroke-opacity=".7"/></g><g transform="translate(900 746) rotate(6)"><ellipse rx="17" ry="7.5" fill="#b9566a"/><ellipse cx="5" cy="-.6" rx="10" ry="4.4" fill="#4a2230"/><ellipse rx="17" ry="7.5" fill="none" stroke="#f2dfe6" stroke-width="1.6" stroke-opacity=".7"/></g></g>
  <rect x="-3000" y="526" width="7200" height="30" fill="url(#skirtG)"/>
  <rect x="-3000" y="-2000" width="7200" height="2526" fill="url(#wallLight)"/>

  <!-- rug & soft floor shadows -->
  <g id="shadows" filter="url(#blur6)" opacity=".5" fill="#000">
    <ellipse cx="795" cy="642" rx="250" ry="14"/><ellipse cx="1090" cy="612" rx="110" ry="9"/><ellipse cx="210" cy="694" rx="140" ry="9"/><ellipse cx="588" cy="617" rx="36" ry="6"/>
  </g>
  <g id="rug">
    <ellipse cx="470" cy="656" rx="266" ry="46" fill="#000" opacity=".32" filter="url(#soft2)"/>
    <ellipse cx="470" cy="653" rx="262" ry="46" fill="#4b2f68"/><ellipse cx="470" cy="650" rx="262" ry="46" fill="#5d3d7e"/>
    <ellipse cx="470" cy="650" rx="258" ry="44" fill="none" stroke="#9a74c4" stroke-width="4" stroke-dasharray="6 3" opacity=".5"/>
    <path d="M222 636Q470 596 718 636" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="1.5"/>
    <ellipse cx="470" cy="648" rx="248" ry="41" fill="url(#rugG)"/><ellipse cx="470" cy="648" rx="237" ry="38" fill="none" stroke="#e8c7ff" stroke-opacity=".3" stroke-width="1.5"/>
    <!-- sea chart woven into the rug: wave rings, islands, a compass and a little lighthouse -->
    <g fill="none" stroke="#e8c7ff"><ellipse cx="470" cy="648" rx="206" ry="33" stroke-opacity=".17" stroke-width="2"/><ellipse cx="470" cy="648" rx="160" ry="25" stroke-opacity=".15" stroke-width="1.6" stroke-dasharray="3 6"/><ellipse cx="470" cy="648" rx="114" ry="17" stroke-opacity=".15" stroke-width="1.6"/><ellipse cx="470" cy="648" rx="68" ry="9.5" stroke-opacity=".13" stroke-width="1.4" stroke-dasharray="2 5"/></g>
    <g id="rugWaves" fill="none" stroke="#e8c7ff" stroke-opacity=".34" stroke-width=".9" stroke-linecap="round"></g>
    <g transform="translate(372 656) scale(1 .4)"><path d="M0 -11L2.4 -2.4L11 0L2.4 2.4L0 11L-2.4 2.4L-11 0L-2.4 -2.4Z" fill="#f1e3c0" opacity=".6"/><circle r="12" fill="none" stroke="#f1e3c0" stroke-opacity=".35"/></g>
    <g transform="translate(424 679) scale(1 .4)"><path d="M-9 2Q-8 -4 -2 -4Q2 -7 7 -3Q11 0 8 3Q0 5 -9 2Z" fill="#e9dcb0" opacity=".6"/><path d="M-4 -1Q0 -5 5 -2Q1 0 -4 -1Z" fill="#7fc79a" opacity=".7"/></g>
    <g transform="translate(236 680) scale(1 .4)"><path d="M-8 2Q-7 -3 -1 -3Q3 -6 7 -2Q10 0 7 3Q0 4 -8 2Z" fill="#e9dcb0" opacity=".55"/></g>
    <g transform="translate(676 671) scale(1 .4)"><path d="M-10 2Q-9 -4 -2 -4Q3 -7 8 -3Q12 0 9 3Q0 5 -10 2Z" fill="#e9dcb0" opacity=".6"/></g>
    <g transform="translate(676 668)"><path d="M-2.4 0L2.4 0L1.6 -13L-1.6 -13Z" fill="#f4efe6" opacity=".85"/><path d="M-1.9 -5L1.9 -5L2.1 -8L-2.1 -8Z" fill="#c0504d" opacity=".9"/><rect x="-2" y="-16.5" width="4" height="3.6" fill="#ffe9a0"/><path d="M-2.6 -16.5L0 -19.5L2.6 -16.5Z" fill="#c0504d"/></g>
    <g id="rugFibres" stroke-linecap="round"></g>
    <g clip-path="url(#rugClip)"><g id="rugSun" filter="url(#blur6)" style="opacity:0;mix-blend-mode:screen"><g id="rugSunSkew"><polygon points="82,390 316,390 330,760 52,760" fill="#ffe9b0" opacity=".7"/><polygon points="324,390 558,390 620,760 340,760" fill="#ffe9b0" opacity=".7"/></g></g></g>
  </g>

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
  </g>
  <!-- curtains -->
  <rect x="26" y="44" width="588" height="9" rx="4" fill="#3a2d58"/><circle cx="26" cy="48" r="8" fill="#5b4890"/><circle cx="614" cy="48" r="8" fill="#5b4890"/>
  <g class="curt"><path d="M38 52H126L116 398Q82 408 38 398Z" fill="url(#curtG)"/><path d="M62 52L58 400M86 52L88 402M108 52L106 400" stroke="#000" stroke-opacity=".16" stroke-width="3" fill="none"/></g>
  <g class="curt" style="animation-delay:-3s"><path d="M514 52H602V398Q558 408 524 398Z" fill="url(#curtG)"/><path d="M536 52L534 400M558 52L562 402M582 52L580 400" stroke="#000" stroke-opacity=".16" stroke-width="3" fill="none"/></g>

  <!-- ===== CLOCK ===== -->
  <g class="obj" data-obj="clock">
    <circle cx="644" cy="147" r="55" fill="#000" opacity=".24"/>
    <g transform="translate(640 140)">
      <circle r="54" fill="url(#rimG)"/><circle r="54" fill="none" stroke="#3a2412" stroke-opacity=".55"/>
      <path d="M-45 -30 A54 54 0 0 1 18 -51" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.6" stroke-linecap="round"/>
      <circle r="48.6" fill="#5a3b1f"/><circle r="47" fill="url(#faceG)"/>
      <path d="M-45.6 -9 A46.4 46.4 0 0 1 9 -45.5" fill="none" stroke="#000" stroke-opacity=".14" stroke-width="3.2"/>
      <g id="ticks" stroke="#4b3a66" stroke-linecap="round"></g>
      <g font-family="Georgia,'Times New Roman',serif" font-size="9.5" font-weight="700" fill="#4b3a66" text-anchor="middle"><text x="0" y="-26.5">12</text><text x="30.5" y="3.4">3</text><text x="0" y="33.5">6</text><text x="-30.5" y="3.4">9</text></g>
      <text y="17" font-family="Georgia,'Times New Roman',serif" font-style="italic" font-size="4.4" text-anchor="middle" fill="#8b7b9c" letter-spacing=".3">như hôm qua</text>
      <g style="filter:drop-shadow(1.2px 2px 1px #00000055)">
        <g id="hHand"><path d="M0 -27 L3.4 -3 L0 7 L-3.4 -3Z" fill="#2a2548"/><path d="M0 -24 L1.5 -5 L-1.5 -5Z" fill="#fff" opacity=".13"/></g>
        <g id="mHand"><path d="M0 -40 L2.4 -3 L0 8 L-2.4 -3Z" fill="#2a2548"/><path d="M0 -37 L1 -5 L-1 -5Z" fill="#fff" opacity=".13"/></g>
        <g id="sHand"><line y1="11" y2="-43" stroke="#c778dd" stroke-width="1.1" stroke-linecap="round"/><circle cy="-31" r="2.3" fill="#c778dd"/></g>
      </g>
      <circle r="3.8" fill="#d9b06a"/><circle r="1.7" fill="#c778dd"/>
      <clipPath id="clockClip"><circle r="47"/></clipPath>
      <g clip-path="url(#clockClip)"><path d="M-62 -4 L-8 -62 L12 -62 L-62 24Z" fill="#fff" opacity=".13"/></g>
      <path d="M-35 -18 Q-27 -34 -9 -40 Q-25 -31 -31 -12Z" fill="#fff" opacity=".32"/>
    </g>
  </g>

  <!-- ===== CORKBOARD ===== -->
  <g class="obj" data-obj="cork">
    <rect x="700" y="82" width="244" height="198" rx="7" fill="#000" opacity=".28" filter="url(#soft2)"/>
    <rect x="696" y="76" width="244" height="198" rx="7" fill="url(#woodFrameG)"/>
    <rect x="697" y="77" width="242" height="196" rx="6" fill="none" stroke="#fff" stroke-opacity=".28"/>
    <rect x="706" y="86" width="224" height="178" rx="3" fill="url(#corkG)"/>
    <g id="corkDots"></g>
    <path d="M706 86H930L923 93H713V257L706 264Z" fill="#000" opacity=".3"/><path d="M930 264H706L713 257H923V93L930 86Z" fill="#fff" opacity=".13"/>
    <g transform="rotate(-5 752 131)"><rect x="717.5" y="100.5" width="72" height="66" fill="#000" opacity=".34" filter="url(#soft2)"/><rect x="716" y="98" width="72" height="66" fill="#fff3a8"/><rect x="716" y="98" width="72" height="66" fill="url(#paperSh)"/><rect x="716.5" y="98.5" width="71" height="65" fill="none" stroke="#000" stroke-opacity=".07"/>
      <polygon points="788,164 773,164 788,149" fill="#cdbb62"/><polygon points="773,164 788,149 785,163" fill="#000" opacity=".12"/>
      <g fill="none" stroke="#2a2548" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="737" cy="133" r="8.5"/><circle cx="737" cy="133" r="2.6" fill="#2a2548" stroke="none"/><path d="M745.5 133H774M764 133v9M771 133v6"/></g>
      <path d="M772 108l9 9M781 108l-9 9" stroke="#d94a4a" stroke-width="2.4" stroke-linecap="round"/>
      <rect x="738" y="92" width="28" height="11" fill="#7fd0c0" opacity=".8" transform="rotate(-4 752 97)"/>
    </g>
    <g transform="rotate(5 878 133)"><rect x="837.5" y="100.5" width="84" height="70" fill="#000" opacity=".34" filter="url(#soft2)"/><rect x="836" y="98" width="84" height="70" fill="#ffc9dd"/><rect x="836" y="98" width="84" height="70" fill="url(#paperSh)"/><rect x="836.5" y="98.5" width="83" height="69" fill="none" stroke="#000" stroke-opacity=".07"/>
      <g id="hoods"><use href="#hood" transform="translate(856 127) scale(.8)"/><use href="#hood" transform="translate(878 127) scale(.8)"/><use href="#hood" transform="translate(900 127) scale(.8)"/></g>
      <rect x="846" y="93" width="24" height="10" fill="#f2a65a" opacity=".82" transform="rotate(3 858 98)"/>
    </g>
    <g transform="rotate(-2 816 221)"><rect x="773.5" y="192.5" width="88" height="62" fill="#000" opacity=".34" filter="url(#soft2)"/><rect x="772" y="190" width="88" height="62" fill="#c9f0e0"/><rect x="772" y="190" width="88" height="62" fill="url(#paperSh)"/><rect x="772.5" y="190.5" width="87" height="61" fill="none" stroke="#000" stroke-opacity=".07"/>
      <g transform="translate(816 223) scale(1.05)" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 -18 L15 -11 V4 Q15 17 0 24 Q-15 17 -15 4 V-11Z" stroke="#2a2548" stroke-width="2.2" fill="#fff" fill-opacity=".45"/><path d="M-6 3 L-1 8 L8 -4" stroke="#2f9d78" stroke-width="2.6"/></g>
    </g>
    <g transform="rotate(-6 739 214)"><rect x="718" y="188" width="46" height="56" fill="#000" opacity=".34" filter="url(#soft2)" transform="translate(1.5 2.5)"/><rect x="716" y="186" width="46" height="56" fill="#f7f4ee"/>
      <g clip-path="url(#phA)"><rect x="720" y="190" width="38" height="36" fill="#6fb4ea"/><circle cx="748" cy="198" r="3.6" fill="#ffe58a"/><path d="M720 212L731 200L741 210L748 204L758 214V226H720Z" fill="#8fa4c9"/><path d="M720 218Q733 211 745 219T758 217V226H720Z" fill="#c28a45"/></g>
      <rect x="722" y="184" width="26" height="9" fill="#f2c94c" opacity=".8" transform="rotate(-3 735 188)"/></g>
    <g transform="rotate(5 889 210)"><rect x="868" y="184" width="46" height="56" fill="#000" opacity=".34" filter="url(#soft2)" transform="translate(1.5 2.5)"/><rect x="866" y="182" width="46" height="56" fill="#f7f4ee"/>
      <rect x="870" y="186" width="38" height="36" fill="#1a1d3a"/><g fill="#3f8f4a"><rect x="888" y="198" width="9" height="6"/><rect x="895" y="195" width="6" height="6"/><rect x="889" y="204" width="5" height="3"/><rect x="884" y="200" width="4" height="3"/><rect x="890" y="207" width="2" height="3"/><rect x="895" y="207" width="2" height="3"/></g><path d="M870 214h38" stroke="#8a6446" stroke-width="3"/><rect x="900" y="209" width="4" height="5" fill="#8f8aa6"/>
      <rect x="878" y="178" width="26" height="9" fill="#d78bd0" opacity=".82" transform="rotate(2 891 182)"/></g>
    <g fill="none" stroke-linecap="round"><path d="M754 102Q800 124 847 103M847 103Q828 152 816 197" stroke="#000" stroke-opacity=".25" stroke-width="2" transform="translate(1.5 2.5)"/><path d="M754 102Q800 124 847 103M847 103Q828 152 816 197" stroke="#d94a4a" stroke-width="1.7"/></g>
    <g><ellipse cx="755.5" cy="104.6" rx="3.6" ry="2.2" fill="#000" opacity=".3"/><circle cx="754" cy="102" r="4.2" fill="#c93d3d"/><circle cx="752.8" cy="100.7" r="1.5" fill="#fff" opacity=".7"/></g><g><ellipse cx="848.5" cy="105.6" rx="3.6" ry="2.2" fill="#000" opacity=".3"/><circle cx="847" cy="103" r="4.2" fill="#c93d3d"/><circle cx="845.8" cy="101.7" r="1.5" fill="#fff" opacity=".7"/></g><g><ellipse cx="817.5" cy="199.6" rx="3.6" ry="2.2" fill="#000" opacity=".3"/><circle cx="816" cy="197" r="4.2" fill="#c93d3d"/><circle cx="814.8" cy="195.7" r="1.5" fill="#fff" opacity=".7"/></g>
  </g>

  <!-- ===== BOOKSHELF + TABLET ===== -->
  <g class="obj" data-obj="shelf">
    <rect x="1010" y="44" width="166" height="568" rx="5" fill="#000" opacity=".24" transform="translate(6,7)" filter="url(#soft2)"/>
    <rect x="1010" y="44" width="166" height="568" rx="5" fill="url(#shelfG)"/>
    <g stroke="#000" stroke-opacity=".12"><path d="M1014 50V606M1018 50V606M1168 50V606M1172 50V606"/></g><rect x="1010" y="44" width="3" height="568" fill="#fff" opacity=".16"/>
    <rect x="1022" y="56" width="142" height="544" fill="url(#shelfBackG)"/>
    <rect x="1022" y="56" width="11" height="544" fill="url(#sideShL)"/><rect x="1153" y="56" width="11" height="544" fill="url(#sideShR)"/>
    <rect x="1022" y="56" width="142" height="544" fill="url(#shelfLightG)"/>
    <rect x="1002" y="35" width="182" height="13" rx="3" fill="url(#shelfG)"/><rect x="1002" y="35" width="182" height="3" rx="1.5" fill="#fff" opacity=".35"/><rect x="1002" y="46" width="182" height="3" fill="#000" opacity=".25"/>
    <g>
      <g id="boards" fill="url(#boardG)"><rect x="1014" y="188" width="158" height="13"/><rect x="1014" y="328" width="158" height="13"/><rect x="1014" y="468" width="158" height="13"/><rect x="1014" y="598" width="158" height="14"/></g>
      <g fill="#fff" opacity=".28"><rect x="1014" y="188" width="158" height="2"/><rect x="1014" y="328" width="158" height="2"/><rect x="1014" y="468" width="158" height="2"/></g>
      <g fill="url(#boardShG)"><rect x="1022" y="201" width="142" height="9"/><rect x="1022" y="341" width="142" height="9"/><rect x="1022" y="481" width="142" height="9"/></g>
    </g>
    <g id="books"></g>
    <!-- model ship -->
    <g>
      <rect x="1121" y="183" width="30" height="5" rx="1" fill="#5e3d29"/>
      <path d="M1113 170H1157L1149 183H1121Z" fill="#7a4a2c"/><path d="M1113 170H1157L1156 173H1114Z" fill="#c0504d"/><path d="M1121 183H1149L1150 181H1120Z" fill="#000" opacity=".2"/>
      <g fill="#ffe9a0"><circle cx="1127" cy="177" r="1.2"/><circle cx="1135" cy="177" r="1.2"/><circle cx="1143" cy="177" r="1.2"/></g>
      <g stroke="#4a301f" stroke-width="1.6" stroke-linecap="round"><path d="M1130 170V128M1146 170V138"/></g>
      <path d="M1131.5 133Q1152 150 1131.5 166Z" fill="#f4efe6"/><path d="M1131.5 133Q1144 149 1131.5 166Z" fill="#000" opacity=".08"/>
      <path d="M1147.5 143Q1159 154 1147.5 165Z" fill="#f4efe6"/><path d="M1130 128L1139 131L1130 134Z" fill="#c0504d"/>
      <path d="M1130 170L1114 168M1146 170L1157 168" stroke="#4a301f" stroke-width=".8" fill="none"/>
    </g>
    <!-- lantern -->
    <g>
      <rect x="1144" y="323" width="16" height="5" rx="1.5" fill="#3a3042"/>
      <rect x="1146.5" y="299" width="11" height="24" rx="2" fill="#ffe9a0" opacity=".5"/><rect x="1146.5" y="299" width="11" height="24" rx="2" fill="none" stroke="#3a3042" stroke-width="1.6"/><path d="M1152 299V323" stroke="#3a3042" stroke-width=".8" opacity=".6"/>
      <path d="M1145 299H1159L1156 294H1148Z" fill="#3a3042"/><path d="M1148 294Q1152 284 1156 294" fill="none" stroke="#3a3042" stroke-width="1.4"/>
      <path d="M1152 321Q1147 314 1152 305Q1157 314 1152 321Z" fill="#ffb347"/><path d="M1152 320Q1150 315 1152 310Q1154 315 1152 320Z" fill="#fff3b0"/>
    </g>
    <!-- Lampje: lighthouse spine, pulled out a little -->
    <g transform="translate(1074 355)">
      <rect x="22" y="2" width="4" height="116" fill="#000" opacity=".28"/>
      <rect width="22" height="116" rx="1.5" fill="#1f4e79"/><rect width="2.2" height="116" fill="#fff" opacity=".2"/><rect x="19.5" width="2.5" height="116" fill="#000" opacity=".2"/>
      <rect x="1" y="7" width="20" height="2" fill="#e6c36a"/><rect x="1" y="105" width="20" height="2" fill="#e6c36a"/>
      <g fill="#fff" opacity=".8"><circle cx="5" cy="17" r=".8"/><circle cx="16" cy="21" r=".7"/><circle cx="11" cy="14" r=".6"/></g>
      <path d="M8.5 31L11 26L13.5 31Z" fill="#c0504d"/><rect x="8.6" y="31" width="4.8" height="6" fill="#ffe9a0"/>
      <path d="M8.6 31L1.5 26.5V36L8.6 34Z" fill="#ffe9a0" opacity=".45"/><path d="M13.4 31L20.5 26.5V36L13.4 34Z" fill="#ffe9a0" opacity=".45"/>
      <rect x="7" y="37" width="8" height="2" fill="#2a2548"/>
      <path d="M8.2 39H13.8L15 79H7Z" fill="#f4efe6"/><path d="M8.7 47H13.3L13.5 55H8.5Z" fill="#c0504d"/><path d="M8.2 64H13.8L14.2 72H7.8Z" fill="#c0504d"/>
      <path d="M4 88L7 79H15L18 88Z" fill="#3a3042"/>
      <path d="M2 92Q4.5 89 7 92T12 92T17 92T20 92" fill="none" stroke="#8fc5e8" stroke-width="1.2"/><path d="M2 97Q4.5 94 7 97T12 97T17 97T20 97" fill="none" stroke="#8fc5e8" stroke-width="1.2" opacity=".6"/>
    </g>
    <!-- conch -->
    <g>
      <path d="M1135 466Q1133 452 1145 448Q1158 450 1157 462Q1150 467 1135 466Z" fill="#f0c9a8"/><path d="M1156 455L1161 447L1153 451Z" fill="#e3b08a"/>
      <path d="M1139 460Q1146 453 1153 457M1141 464Q1148 458 1155 462" fill="none" stroke="#c98f6b" stroke-width="1.2"/><path d="M1135 466Q1146 468 1157 462" fill="none" stroke="#fff" stroke-opacity=".5"/>
    </g>
    <!-- stacked books and starfish -->
    <g>
      <rect x="1028" y="584" width="62" height="14" rx="1" fill="#4b7fd0"/><rect x="1086" y="585" width="4" height="12" fill="#f4efe6"/><rect x="1031" y="586" width="52" height="1.6" fill="#e6c36a" opacity=".8"/>
      <rect x="1030" y="572" width="57" height="12" rx="1" fill="#e0b04a"/><rect x="1083" y="573" width="4" height="10" fill="#f4efe6"/><rect x="1033" y="578" width="46" height="1.6" fill="#fff" opacity=".6"/>
      <rect x="1027" y="561" width="60" height="11" rx="1" fill="#a05fc0"/><rect x="1083" y="562" width="4" height="9" fill="#f4efe6"/>
      <polygon points="1058.0,542.0 1060.6,549.4 1068.5,549.6 1062.3,554.4 1064.5,561.9 1058.0,557.5 1051.5,561.9 1053.7,554.4 1047.5,549.6 1055.4,549.4" fill="#f2a65a"/><polygon points="1058.0,542.0 1060.6,549.4 1068.5,549.6 1062.3,554.4 1064.5,561.9 1058.0,557.5 1051.5,561.9 1053.7,554.4 1047.5,549.6 1055.4,549.4" fill="none" stroke="#c97a3a" stroke-width=".8"/><g fill="#ffd9a8"><circle cx="1058" cy="548" r=".9"/><circle cx="1054" cy="555" r=".8"/><circle cx="1062" cy="555" r=".8"/></g>
    </g>
  </g>
  <g class="obj" data-obj="tablet" transform="rotate(-4 1090 280)">
    <rect x="1048" y="214" width="84" height="108" rx="10" fill="#000" opacity=".25" transform="translate(3,3)"/>
    <rect x="1048" y="214" width="84" height="108" rx="10" fill="#8f8a96"/><rect x="1048" y="214" width="84" height="108" rx="10" fill="none" stroke="#6c6773" stroke-width="3"/>
    <g><use href="#rg0" transform="translate(1058.9,236.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg1" transform="translate(1084.9,236.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg2" transform="translate(1110.9,236.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg3" transform="translate(1058.9,266.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg4" transform="translate(1084.9,266.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg5" transform="translate(1110.9,266.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg6" transform="translate(1071.9,296.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg7" transform="translate(1097.9,296.9) scale(0.015,-0.015)" fill="#d4cfdc" opacity="0.55"/><use href="#rg0" transform="translate(1058,236) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg1" transform="translate(1084,236) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg2" transform="translate(1110,236) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg3" transform="translate(1058,266) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg4" transform="translate(1084,266) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg5" transform="translate(1110,266) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg6" transform="translate(1071,296) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/><use href="#rg7" transform="translate(1097,296) scale(0.015,-0.015)" fill="#403b49" opacity="0.95"/></g>
  </g>

  <g id="plantShadow" class="fx" transform="translate(30 -6)" filter="url(#soft2)" style="opacity:0"></g>

  <!-- ===== DESK ===== -->
  <g class="obj" data-obj="desk">
    <ellipse cx="795" cy="643" rx="215" ry="8" fill="#000" opacity=".22" filter="url(#soft2)"/>
    <rect x="612" y="464" width="16" height="176" fill="#a8744a"/><rect x="612" y="464" width="4" height="176" fill="#fff" opacity=".2"/><rect x="623" y="464" width="5" height="176" fill="#000" opacity=".16"/>
    <rect x="962" y="464" width="16" height="176" fill="#a8744a"/><rect x="962" y="464" width="4" height="176" fill="#fff" opacity=".2"/>
    <rect x="860" y="476" width="118" height="150" fill="#b98258"/><rect x="860" y="476" width="4" height="150" fill="#fff" opacity=".18"/><rect x="974" y="476" width="4" height="150" fill="#000" opacity=".16"/>
    <rect x="870" y="488" width="98" height="52" rx="3" fill="#a8744a"/><rect x="870" y="488" width="98" height="2.5" rx="1" fill="#fff" opacity=".28"/><rect x="870" y="488" width="98" height="52" rx="3" fill="none" stroke="#000" stroke-opacity=".16"/>
    <rect x="906" y="509" width="26" height="7" rx="3.5" fill="url(#brassG)"/><rect x="908" y="510" width="22" height="1.5" rx=".7" fill="#fff" opacity=".6"/>
    <rect x="868" y="548" width="102" height="7" fill="#2a1a12"/><g transform="rotate(-4 895 548)"><rect x="880" y="543" width="34" height="8" fill="#f4efe6"/><path d="M883 546H907" stroke="#9a93b0" stroke-width=".8"/></g>
    <rect x="870" y="554" width="98" height="48" rx="3" fill="#a8744a"/><rect x="870" y="554" width="98" height="2.5" rx="1" fill="#fff" opacity=".28"/><rect x="870" y="554" width="98" height="48" rx="3" fill="none" stroke="#000" stroke-opacity=".16"/>
    <rect x="906" y="575" width="26" height="7" rx="3.5" fill="url(#brassG)"/><rect x="908" y="576" width="22" height="1.5" rx=".7" fill="#fff" opacity=".6"/>
    <rect x="590" y="440" width="410" height="26" rx="5" fill="url(#woodG)"/>
    <g stroke="#7a4a2a" stroke-opacity=".14" stroke-width=".8" fill="none"><path d="M598 447q60-3 120 0t120 0t120 0t30 0"/><path d="M596 454q70 3 140 0t140 0t110 0"/><path d="M604 460q80-2 160 0t160 0t60 0"/></g>
    <rect x="590" y="440" width="410" height="4" rx="2" fill="#fff" opacity=".42"/><rect x="590" y="462" width="410" height="4" fill="#000" opacity=".12"/>
    <rect x="598" y="464" width="394" height="10" fill="#a8744a"/><rect x="598" y="474" width="394" height="14" fill="url(#boardShG)"/>
    <!-- monitor -->
    <rect x="780" y="428" width="16" height="12" fill="#2a2548"/><rect x="780" y="428" width="4" height="12" fill="#fff" opacity=".12"/><rect x="758" y="436" width="60" height="5" rx="2.5" fill="#2a2548"/><rect x="760" y="436" width="56" height="1.4" rx=".7" fill="#fff" opacity=".2"/>
    <rect x="700" y="316" width="176" height="114" rx="9" fill="url(#bezelG)"/><rect x="700.5" y="316.5" width="175" height="113" rx="8.5" fill="none" stroke="#fff" stroke-opacity=".14"/><rect x="708" y="324" width="160" height="96" rx="3" fill="#13162c"/>
    <g id="code"></g>
    <polygon points="708,324 800,324 740,420 708,420" fill="#fff" opacity=".04"/><path d="M712 326H748L722 360Q714 362 712 352Z" fill="#fff" opacity=".07"/><rect x="708" y="324" width="160" height="96" rx="3" fill="none" stroke="#000" stroke-opacity=".5"/>
    <circle cx="788" cy="425.2" r="1" fill="#fff" opacity=".25"/><circle class="notif" cx="863" cy="425.2" r="1.3" fill="#ffd98a"/>
    <!-- desk mat, keyboard, mouse -->
    <rect x="722" y="436" width="124" height="5" rx="2" fill="#2a2548"/><rect x="722" y="436" width="124" height="1.4" rx=".7" fill="#fff" opacity=".25"/><path d="M725 439.2H843" stroke="#8b7bd8" stroke-width=".6" stroke-dasharray="2 1.4" opacity=".7"/>
    <path d="M738 430.5H810L814 436.5H733Z" fill="#3a3358"/><path d="M738 430.5H810L810.8 431.5H737.2Z" fill="#fff" opacity=".15"/>
    <path d="M739 432.2H809" stroke="#cfc6ee" stroke-width="1.5" stroke-dasharray="4.2 1.3"/><path d="M737.6 434.6H811" stroke="#cfc6ee" stroke-width="1.5" stroke-dasharray="4.8 1.3" stroke-dashoffset="2"/>
    <rect x="798" y="431.4" width="4" height="1.6" rx=".4" fill="#c778dd"/><rect x="745" y="433.8" width="9" height="1.6" rx=".4" fill="#ffd98a"/>
    <rect x="822" y="429" width="10" height="8" rx="4" fill="#3a3358"/><rect x="822" y="429" width="10" height="3" rx="1.5" fill="#fff" opacity=".18"/><path d="M827 429v3.4" stroke="#000" stroke-opacity=".4" stroke-width=".6"/>
    <!-- mug on a saucer -->
    <ellipse cx="971" cy="440.5" rx="21" ry="3.2" fill="#000" opacity=".25"/><ellipse cx="971" cy="439" rx="20" ry="3" fill="#e8e2d4"/><ellipse cx="971" cy="438.4" rx="20" ry="2.3" fill="#fff" opacity=".4"/>
    <path d="M984 421h7a6 6 0 0 1 0 13h-7" fill="none" stroke="#f4efe6" stroke-width="4"/><path d="M984 421h7a6 6 0 0 1 4 1.6" fill="none" stroke="#fff" stroke-width="1" opacity=".6"/>
    <rect x="958" y="414" width="26" height="26" rx="5" fill="url(#mugG)"/><rect x="958" y="423" width="26" height="4.4" fill="#4b3a66"/>
    <g fill="#f4e6c8"><path d="M964 425.2l1.4-1.6 1.4 1.6-1.4 1.6z"/><path d="M970 425.2l1.4-1.6 1.4 1.6-1.4 1.6z"/><path d="M976 425.2l1.4-1.6 1.4 1.6-1.4 1.6z"/></g>
    <rect x="961" y="417" width="3" height="21" rx="1.5" fill="#fff" opacity=".55"/>
    <ellipse cx="971" cy="414.2" rx="13" ry="3.2" fill="#f4efe6"/><ellipse cx="971" cy="414.6" rx="11" ry="2.4" fill="#4a2c1c"/><ellipse cx="968" cy="414.2" rx="4" ry=".8" fill="#9a6a45" opacity=".6"/>
    <g id="steamG" stroke="#fff" stroke-width="1.8" stroke-linecap="round" fill="none" opacity=".6"><path class="steam" d="M966 410q-5-6 0-12q5-6 0-12"/><path class="steam" style="animation-delay:-1.2s" d="M972 410q5-7 0-13q-4-6 1-11"/><path class="steam" style="animation-delay:-.6s;animation-duration:3s" d="M977 410q-4-6 0-11"/></g>
  </g>
  <g class="obj" data-obj="phone"><rect x="846" y="434" width="34" height="6" rx="3" fill="#1c1830"/><rect x="849" y="435" width="20" height="3.5" rx="1.5" fill="#4b6fd0"/><circle class="notif" cx="877" cy="434" r="4" fill="#ff6b8a"/></g>
  <g class="obj" data-obj="notebook">
    <polygon points="888,441 944,441 938,427 894,427" fill="#c0504d"/><polygon points="888,441 944,441 944,444 888,444" fill="#f4efe6"/>
    <text x="916" y="437" font-family="Georgia,serif" font-size="7" font-weight="700" fill="#f4e6c8" text-anchor="middle">about me</text>
  </g>
  <!-- speaker on a wall shelf: its cone rocks with the music once it is switched on -->
  <g id="speaker" class="obj" data-obj="speaker">
    <rect x="886" y="394" width="66" height="5" rx="1.5" fill="#000" opacity=".25" filter="url(#soft2)"/>
    <rect x="884" y="392" width="66" height="5" rx="1.5" fill="url(#woodG)"/><rect x="884" y="392" width="66" height="1.6" rx=".8" fill="#fff" opacity=".4"/>
    <path d="M891 397V408L902 397Z" fill="#a8744a"/><path d="M943 397V408L932 397Z" fill="#a8744a"/>
    <g id="spkBody">
      <rect x="898" y="346" width="44" height="46" rx="5" fill="#000" opacity=".25" transform="translate(1.5 2)"/>
      <rect x="896" y="344" width="44" height="48" rx="5" fill="url(#bezelG)"/><rect x="896.5" y="344.5" width="43" height="47" rx="4.5" fill="none" stroke="#fff" stroke-opacity=".16"/>
      <circle cx="918" cy="355" r="4.4" fill="#13162c" stroke="#8b7bd8" stroke-opacity=".6" stroke-width=".7"/><circle cx="918" cy="355" r="2.1" fill="#3a3358"/>
      <g id="spkCone"><circle cx="918" cy="373" r="13" fill="#13162c"/><circle cx="918" cy="373" r="12" fill="none" stroke="#5a4f80" stroke-width="1.4"/><circle cx="918" cy="373" r="9" fill="#1c1830" stroke="#3a3358"/><circle cx="918" cy="373" r="3.8" fill="#4b4470"/><circle cx="916.8" cy="371.8" r="1.2" fill="#fff" opacity=".35"/></g>
      <circle id="spkLed" cx="933" cy="387" r="1.4"/>
    </g>
    <g id="spkNotes" transform="translate(918 342)"><g class="note" style="animation-delay:0s" transform="translate(-10 0)"><ellipse rx="2" ry="1.5" fill="#e8c7ff"/><path d="M2 0V-8l3 1.5" stroke="#e8c7ff" stroke-width="1.1" fill="none" stroke-linecap="round"/></g><g class="note" style="animation-delay:-0.9s" transform="translate(4 0)"><ellipse rx="2" ry="1.5" fill="#e8c7ff"/><path d="M2 0V-8l3 1.5" stroke="#e8c7ff" stroke-width="1.1" fill="none" stroke-linecap="round"/></g><g class="note" style="animation-delay:-1.7s" transform="translate(12 0)"><ellipse rx="2" ry="1.5" fill="#e8c7ff"/><path d="M2 0V-8l3 1.5" stroke="#e8c7ff" stroke-width="1.1" fill="none" stroke-linecap="round"/></g></g>
  </g>

  <!-- lamp -->
  <g class="obj" data-obj="lamp">
    <path d="M600 439Q590 442 588 452" stroke="#1c1830" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="626" cy="441" rx="30" ry="6" fill="#1c1830"/><ellipse cx="626" cy="438.5" rx="28" ry="5" fill="#3a3358"/><ellipse cx="626" cy="437.4" rx="22" ry="3.4" fill="#4b4470"/><circle cx="644" cy="437.6" r="2" fill="url(#brassG)"/>
    <path d="M626 436L621 398L656 364" fill="none" stroke="#2a2548" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M625 430L621.4 400" stroke="#fff" stroke-opacity=".18" stroke-width="1.2" stroke-linecap="round"/>
    <circle cx="621" cy="398" r="5.4" fill="url(#brassG)"/><circle cx="658" cy="362" r="4.6" fill="url(#brassG)"/><circle cx="620" cy="396.6" r="1.6" fill="#fff" opacity=".6"/>
    <polygon id="shade" points="642,334 682,340 706,376 622,372" fill="#e9b44c"/><polygon points="622,372 706,376 702,380 626,378" fill="#b88a2a"/><polygon points="642,334 662,337 650,372 622,372" fill="#fff" opacity=".18"/><path d="M646 338L684 343" stroke="#fff" stroke-opacity=".4" stroke-width="1.2" stroke-linecap="round"/><path d="M650 372L662 337" stroke="#000" stroke-opacity=".1" stroke-width="1"/>
    <ellipse id="bulb" class="fx" cx="664" cy="380" rx="28" ry="7" fill="#fff6c0" style="opacity:0"/>
  </g>

  <!-- chandelier -->
  <g class="obj" data-obj="ceiling">
    <line x1="600" y1="-400" x2="600" y2="12" stroke="#3a2d58" stroke-width="2.5"/>
    <circle cx="600" cy="14" r="5" fill="#d9a441"/>
    <path d="M594 22h12l-3 20h-6z" fill="#b8892f"/><circle cx="600" cy="44" r="4.5" fill="#d9a441"/>
    <path d="M600 22Q560 24 548 12M600 22Q640 24 652 12M600 20Q588 12 574 6M600 20Q612 12 626 6M600 20V6" fill="none" stroke="#b8892f" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="600" cy="22" rx="11" ry="4" fill="#d9a441"/>
    <g fill="#fff" opacity=".7"><path d="M586 24l-3 10 3 3 3-3z"/><path d="M614 24l3 10-3 3-3-3z"/><path d="M600 48l-3 6 3 4 3-4z"/></g>
    <g id="cBulbs"><rect x="545" y="16" width="6" height="9" rx="1.5" fill="#f4ead0"/><ellipse class="cb fx" cx="548" cy="12" rx="4.5" ry="7" fill="#fff3c4" style="opacity:0"/><path d="M548 9Q551 13 548 16Q545 13 548 9Z" class="cf" fill="#ffe08a" opacity="0"/><rect x="571" y="4" width="6" height="9" rx="1.5" fill="#f4ead0"/><ellipse class="cb fx" cx="574" cy="0" rx="4.5" ry="7" fill="#fff3c4" style="opacity:0"/><path d="M574 -3Q577 1 574 4Q571 1 574 -3Z" class="cf" fill="#ffe08a" opacity="0"/><rect x="597" y="0" width="6" height="9" rx="1.5" fill="#f4ead0"/><ellipse class="cb fx" cx="600" cy="-4" rx="4.5" ry="7" fill="#fff3c4" style="opacity:0"/><path d="M600 -7Q603 -3 600 0Q597 -3 600 -7Z" class="cf" fill="#ffe08a" opacity="0"/><rect x="623" y="4" width="6" height="9" rx="1.5" fill="#f4ead0"/><ellipse class="cb fx" cx="626" cy="0" rx="4.5" ry="7" fill="#fff3c4" style="opacity:0"/><path d="M626 -3Q629 1 626 4Q623 1 626 -3Z" class="cf" fill="#ffe08a" opacity="0"/><rect x="649" y="16" width="6" height="9" rx="1.5" fill="#f4ead0"/><ellipse class="cb fx" cx="652" cy="12" rx="4.5" ry="7" fill="#fff3c4" style="opacity:0"/><path d="M652 9Q655 13 652 16Q649 13 652 9Z" class="cf" fill="#ffe08a" opacity="0"/></g>
  </g>

  <!-- ===== CARO TABLE ===== -->
  <g class="obj" data-obj="board">
    <ellipse cx="211" cy="695" rx="140" ry="7" fill="#000" opacity=".22" filter="url(#soft2)"/>
    <polygon points="104,620 118,620 115,692 106,692" fill="#a8744a"/><polygon points="104,620 108,620 107,692 106,692" fill="#fff" opacity=".2"/><polygon points="115,620 118,620 115,692" fill="#000" opacity=".16"/>
    <polygon points="304,620 318,620 316,692 307,692" fill="#a8744a"/><polygon points="304,620 308,620 308,692 307,692" fill="#fff" opacity=".2"/><polygon points="315,620 318,620 316,692" fill="#000" opacity=".16"/>
    <rect x="116" y="662" width="190" height="5" rx="1.5" fill="#a8744a"/><rect x="116" y="662" width="190" height="1.4" fill="#fff" opacity=".25"/>
    <rect x="86" y="604" width="250" height="16" rx="3" fill="url(#woodG)"/>
    <g stroke="#7a4a2a" stroke-opacity=".14" stroke-width=".8" fill="none"><path d="M90 610q40-2 80 0t80 0t80 0"/><path d="M92 615q50 2 100 0t100 0t40 0"/></g>
    <rect x="86" y="604" width="250" height="3" rx="1.5" fill="#fff" opacity=".42"/><rect x="86" y="617" width="250" height="3" fill="#000" opacity=".14"/>
    <rect x="94" y="620" width="234" height="8" fill="url(#boardShG)"/>
    <polygon points="106,606 316,606 293,561 129,561" fill="#6b4a35"/><polygon points="106,606 316,606 315,604 107,604" fill="#000" opacity=".2"/><polygon points="129,561 293,561 294,563 128,563" fill="#fff" opacity=".22"/>
    <polygon points="112,604 310,604 288,566 134,566" fill="url(#paperG)"/>
    <polygon points="134,566 288,566 287,568.5 135,568.5" fill="#000" opacity=".14"/><polygon points="134,566 112,604 114,604 135.5,567" fill="#000" opacity=".1"/>
    <path d="M134.0 566L112.0 604M156.0 566L140.3 604M178.0 566L168.6 604M200.0 566L196.9 604M222.0 566L225.1 604M244.0 566L253.4 604M266.0 566L281.7 604M288.0 566L310.0 604M128.5 575.5H293.5M123.0 585.0H299.0M117.5 594.5H304.5" stroke="#7a5a3a" stroke-width="1" fill="none" opacity=".75"/>
    <g transform="translate(.8 1.2)" opacity=".28"><g stroke-width="3" stroke-linecap="round" fill="none"><path d="M172.8 573.3l5.6 4.5M178.4 573.3l-5.6 4.5" stroke="#000"/><path d="M195.0 582.3l6.8 5.4M201.8 582.3l-6.8 5.4" stroke="#000"/><path d="M220.4 591.3l8.0 6.4M228.4 591.3l-8.0 6.4" stroke="#000"/><path d="M245.3 582.3l6.8 5.4M252.1 582.3l-6.8 5.4" stroke="#000"/><ellipse cx="199.2" cy="575.5" rx="3.0" ry="2.4" stroke="#000"/><ellipse cx="223.6" cy="585.0" rx="3.6" ry="2.9" stroke="#000"/><ellipse cx="173.3" cy="585.0" rx="3.6" ry="2.9" stroke="#000"/><ellipse cx="251.1" cy="594.5" rx="4.2" ry="3.4" stroke="#000"/><ellipse cx="144.2" cy="594.5" rx="4.2" ry="3.4" stroke="#000"/></g></g>
    <g stroke-width="2.6" stroke-linecap="round" fill="none"><path d="M172.8 573.3l5.6 4.5M178.4 573.3l-5.6 4.5" stroke="#2a2548"/><path d="M195.0 582.3l6.8 5.4M201.8 582.3l-6.8 5.4" stroke="#2a2548"/><path d="M220.4 591.3l8.0 6.4M228.4 591.3l-8.0 6.4" stroke="#2a2548"/><path d="M245.3 582.3l6.8 5.4M252.1 582.3l-6.8 5.4" stroke="#2a2548"/><ellipse cx="199.2" cy="575.5" rx="3.0" ry="2.4" stroke="#c0392b"/><ellipse cx="223.6" cy="585.0" rx="3.6" ry="2.9" stroke="#c0392b"/><ellipse cx="173.3" cy="585.0" rx="3.6" ry="2.9" stroke="#c0392b"/><ellipse cx="251.1" cy="594.5" rx="4.2" ry="3.4" stroke="#c0392b"/><ellipse cx="144.2" cy="594.5" rx="4.2" ry="3.4" stroke="#c0392b"/></g>
    <g transform="rotate(-8 326 603)"><rect x="313" y="600" width="26" height="3.4" rx="1.4" fill="#c0392b"/><rect x="313" y="600" width="26" height="1.2" rx=".6" fill="#fff" opacity=".35"/><polygon points="313,600 308,601.7 313,603.4" fill="#e8d3a8"/><polygon points="310.4,601 308,601.7 310.4,602.4" fill="#2a2548"/></g>
  </g>
  <!-- plant: leaves and flowers are drawn by buildPlant() for the season of the viewed day -->
  <g id="plant">
    <g id="plantLeaves"></g>
    <path d="M566 572h44l-6 42h-32z" fill="#c76a52"/><path d="M566 572h44l-1 6h-42z" fill="#d9806a"/><path d="M570 579h4l-3 33h-3z" fill="#fff" opacity=".2"/><path d="M600 578h8l-5 36h-6z" fill="#000" opacity=".16"/><path d="M566 572h44l-.4 2.5h-43.2z" fill="#fff" opacity=".3"/>
  </g>
  <!-- cat -->
  <g id="cat" class="obj" data-obj="cat"><g id="catIn">
    <g class="cstretch"><g class="breathe"><ellipse cx="520" cy="664" rx="44" ry="17" fill="#d9a066"/><ellipse cx="520" cy="672" rx="44" ry="8" fill="#000" opacity=".1"/></g></g>
    <path id="catTail" d="M562 668q26-4 14-28" fill="none" stroke="#d9a066" stroke-width="8" stroke-linecap="round"/>
    <g id="catHead">
      <circle cx="474" cy="660" r="15" fill="#d9a066"/><polygon id="earL" points="463,650 468,634 477,648" fill="#d9a066"/><polygon id="earR" points="479,648 488,634 492,652" fill="#d9a066"/>
      <path id="catEyesC" d="M468 661q3 3 6 0M480 661q3 3 6 0" stroke="#4a3a2a" stroke-width="2" fill="none" stroke-linecap="round"/>
      <g id="catEyesO"><ellipse cx="471" cy="660" rx="3.2" ry="3.6" fill="#f4efe6"/><ellipse cx="483" cy="660" rx="3.2" ry="3.6" fill="#f4efe6"/><g id="catPupils"><ellipse cx="471" cy="660.4" rx="1.4" ry="2.6" fill="#2a2018"/><ellipse cx="483" cy="660.4" rx="1.4" ry="2.6" fill="#2a2018"/></g></g>
      <ellipse id="catMouth" cx="478" cy="669" rx="3" ry="3.4" fill="#c0505a"/>
    </g>
    <g id="zz" class="fx" font-family="ui-monospace,monospace" font-weight="700" fill="#e8dcff" style="opacity:0"><text class="zz" x="486" y="640" font-size="16">z</text><text class="zz" style="animation-delay:-1.6s" x="498" y="628" font-size="12">z</text></g>
    <g transform="translate(474 630)"><path id="catHeart" d="M0 4C-8 -2 -6 -9 0 -5C6 -9 8 -2 0 4Z" fill="#ff7aa8"/></g>
  </g></g>

  <!-- ===== LIGHT: window shaft, dust, golden hour ===== -->
  <g id="shaftG0" style="mix-blend-mode:screen" class="fx" filter="url(#blur14)">
    <g id="shaftSkew"><polygon points="82,390 316,390 330,760 52,760" fill="url(#shaftG)"/><polygon points="324,390 558,390 620,760 340,760" fill="url(#shaftG)"/></g>
  </g>
  <g id="motes" fill="#fff6d0" class="fx"></g>
  <rect id="golden" class="fx" x="-3000" y="-2000" width="7200" height="4400" fill="#ff9a4d" style="opacity:0;mix-blend-mode:soft-light"/>

  <!-- earth-element corner: a terracotta jar with dried reeds, and a clay bowl of citrine and tiger's-eye -->
  <g id="clayCorner" pointer-events="none">
    <g transform="translate(1104 672)">
      <ellipse cx="2" cy="36" rx="34" ry="6" fill="#000" opacity=".26"/>
      <g stroke="#b99562" stroke-width="1.3" stroke-linecap="round" fill="none"><path d="M-6 -34Q-14 -52 -16 -72"/><path d="M-1 -34Q-2 -56 2 -78"/><path d="M4 -34Q12 -52 18 -70"/><path d="M8 -34Q20 -46 30 -58"/></g>
      <g fill="#f2e4c4" opacity=".95"><ellipse cx="-16" cy="-75" rx="3.4" ry="9" transform="rotate(-8 -16 -75)"/><ellipse cx="2" cy="-81" rx="3.6" ry="10"/><ellipse cx="18" cy="-73" rx="3.2" ry="8.6" transform="rotate(12 18 -73)"/><ellipse cx="31" cy="-61" rx="3" ry="7.6" transform="rotate(30 31 -61)"/></g>
      <path d="M-22 -32Q-31 -4 -23 28Q0 38 23 28Q31 -4 22 -32Z" fill="url(#clayG)"/>
      <path d="M-24 -10Q0 -3 24 -10M-25 6Q0 13 25 6" fill="none" stroke="#f0cfa0" stroke-width="1.3" opacity=".55"/>
      <path d="M-14 -24Q-19 0 -14 24" fill="none" stroke="#fff" stroke-width="3" opacity=".16" stroke-linecap="round"/>
      <ellipse cx="0" cy="-32" rx="23" ry="5.4" fill="#d9774c"/><ellipse cx="0" cy="-32" rx="17.5" ry="3.6" fill="#40200f"/>
    </g>
    <g transform="translate(1030 706)">
      <ellipse cx="0" cy="9" rx="22" ry="4" fill="#000" opacity=".25"/>
      <path d="M-18 -2Q-17 10 0 10Q17 10 18 -2Z" fill="url(#clayG)"/><ellipse cx="0" cy="-2" rx="18" ry="4" fill="#d9774c"/><ellipse cx="0" cy="-2" rx="14" ry="2.8" fill="#40200f"/>
      <path d="M-9 -3L-6 -11L-1 -9L-1 -3Z" fill="#f3c542"/><path d="M-6 -11L-1 -9L-3 -3Z" fill="#ffe27a" opacity=".8"/>
      <path d="M2 -3L5 -9L10 -8L11 -3Z" fill="#f3c542"/><path d="M5 -9L10 -8L8 -3Z" fill="#c9962a" opacity=".7"/>
      <ellipse cx="-1" cy="-3.6" rx="5" ry="3.2" fill="#8a5a1a"/><path d="M-5 -4.2Q-1 -6.8 3 -4.4" fill="none" stroke="#f1c768" stroke-width="1" opacity=".85"/>
    </g>
  </g>
  <!-- ===== LIGHT: night ===== -->
  <rect id="dark" x="-3000" y="-2000" width="7200" height="4400" fill="#05041a" mask="url(#darkMask)" style="opacity:0"/>
  <!-- glow-in-the-dark stickers on the wall/ceiling, only when every light is off (built in engine.ts) -->
  <g id="glow" class="fx" style="opacity:0"><g id="glowHalo"></g><use href="#glowCore" filter="url(#glowF)" opacity="1"/><g id="glowCore"><g id="boardLume" stroke="#ffd98a" opacity=".85"><g stroke-width="1.6" stroke-linecap="round" fill="none"><path d="M172.8 573.3l5.6 4.5M178.4 573.3l-5.6 4.5" stroke="#ffd98a"/><path d="M195.0 582.3l6.8 5.4M201.8 582.3l-6.8 5.4" stroke="#ffd98a"/><path d="M220.4 591.3l8.0 6.4M228.4 591.3l-8.0 6.4" stroke="#ffd98a"/><path d="M245.3 582.3l6.8 5.4M252.1 582.3l-6.8 5.4" stroke="#ffd98a"/><ellipse cx="199.2" cy="575.5" rx="3.0" ry="2.4" stroke="#ffd98a"/><ellipse cx="223.6" cy="585.0" rx="3.6" ry="2.9" stroke="#ffd98a"/><ellipse cx="173.3" cy="585.0" rx="3.6" ry="2.9" stroke="#ffd98a"/><ellipse cx="251.1" cy="594.5" rx="4.2" ry="3.4" stroke="#ffd98a"/><ellipse cx="144.2" cy="594.5" rx="4.2" ry="3.4" stroke="#ffd98a"/></g></g><g id="kbLume" fill="none" stroke-width="1.6" stroke-linecap="round"><path class="rgb" d="M734 437.2H813"/><path class="rgb" style="animation-delay:-2s" d="M739 432.2H809" stroke-width=".8" opacity=".7"/></g><g id="shelfLume" fill="#ffd98a"><g id="shelfDots"></g><g transform="rotate(-4 1090 280)" opacity=".9"><use href="#rg0" transform="translate(1058.9,236.9) scale(0.015,-0.015)" /><use href="#rg1" transform="translate(1084.9,236.9) scale(0.015,-0.015)" /><use href="#rg2" transform="translate(1110.9,236.9) scale(0.015,-0.015)" /><use href="#rg3" transform="translate(1058.9,266.9) scale(0.015,-0.015)" /><use href="#rg4" transform="translate(1084.9,266.9) scale(0.015,-0.015)" /><use href="#rg5" transform="translate(1110.9,266.9) scale(0.015,-0.015)" /><use href="#rg6" transform="translate(1071.9,296.9) scale(0.015,-0.015)" /><use href="#rg7" transform="translate(1097.9,296.9) scale(0.015,-0.015)" /><use href="#rg0" transform="translate(1058,236) scale(0.015,-0.015)" /><use href="#rg1" transform="translate(1084,236) scale(0.015,-0.015)" /><use href="#rg2" transform="translate(1110,236) scale(0.015,-0.015)" /><use href="#rg3" transform="translate(1058,266) scale(0.015,-0.015)" /><use href="#rg4" transform="translate(1084,266) scale(0.015,-0.015)" /><use href="#rg5" transform="translate(1110,266) scale(0.015,-0.015)" /><use href="#rg6" transform="translate(1071,296) scale(0.015,-0.015)" /><use href="#rg7" transform="translate(1097,296) scale(0.015,-0.015)" /></g><g transform="translate(1074 355)" fill="#ffe9a0"><rect x="8.6" y="31" width="4.8" height="6"/><path d="M8.6 31L1.5 26.5V36L8.6 34Z" opacity=".4"/><path d="M13.4 31L20.5 26.5V36L13.4 34Z" opacity=".4"/><g fill="#ffd98a"><circle cx="5" cy="17" r=".8"/><circle cx="16" cy="21" r=".7"/><circle cx="11" cy="14" r=".6"/></g></g><g fill="#ffe9a0"><path d="M1152 321Q1147 314 1152 305Q1157 314 1152 321Z"/></g></g><g id="corkLume" fill="#ffd98a"><g transform="rotate(5 878 133)"><circle cx="854.4" cy="124.6" r=".8"/><circle cx="857.6" cy="124.6" r=".8"/><circle cx="876.4" cy="124.6" r=".8"/><circle cx="879.6" cy="124.6" r=".8"/><circle cx="898.4" cy="124.6" r=".8"/><circle cx="901.6" cy="124.6" r=".8"/></g><g transform="rotate(-2 816 221)"><path transform="translate(816 223) scale(1.05)" d="M-6 3 L-1 8 L8 -4" fill="none" stroke="#ffd98a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></g></g><g id="clockLume" transform="translate(640 140)"><g id="lumeDots"></g><g id="hLume"><path d="M0 -22 L1.5 -5 L-1.5 -5Z" fill="#ffd98a"/></g><g id="mLume"><path d="M0 -35 L1 -5 L-1 -5Z" fill="#ffd98a"/></g><circle cy="-31" r="1.4" fill="#ffd98a" id="sLume"/></g></g></g>
  <g id="fireflies" style="opacity:0;display:none;mix-blend-mode:screen" pointer-events="none"></g>
  <g style="mix-blend-mode:screen">
    <polygon id="cone" class="fx" points="630,382 698,382 770,442 566,442" fill="url(#coneG)" style="opacity:0"/>
    <polygon id="cCone" class="fx" points="560,30 640,30 1120,720 80,720" fill="url(#coneG)" style="opacity:0"/>
    <circle id="gCeil" class="fx" cx="600" cy="120" r="900" fill="url(#warmG)" style="opacity:0"/>
    <ellipse id="fpCeil" class="fx" cx="600" cy="660" rx="400" ry="60" fill="url(#floorPool)" style="opacity:0"/>
    <ellipse id="fpLamp" class="fx" cx="700" cy="668" rx="240" ry="36" fill="url(#floorPool)" style="opacity:0"/>
    <circle id="gLamp" class="fx" cx="664" cy="384" r="170" fill="url(#warmG)" style="opacity:0"/>
    <ellipse id="mWash" cx="788" cy="445" rx="125" ry="15" fill="url(#blueG)" style="opacity:0"/>
    <g id="lampMotes" class="fx" fill="#ffe9b0" style="opacity:0"></g>
    <circle id="gMon" cx="788" cy="376" r="230" fill="url(#blueG)" style="opacity:0"/>
  </g>

  <g id="hots"></g>
</svg>
<div id="vig"></div>
<div id="tip"></div>

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

<aside id="panel" role="dialog" aria-labelledby="ptitle"><div id="pbg" aria-hidden="true"></div><button id="close" aria-label="Close">✕</button><div id="pbody" class="body"></div></aside>
<div id="welcome"><div class="card body" id="wbody"></div></div>`;
