// Script Structure:
/* array {
    eachCar:{
        num 1: comment,
        num 2: comment,
        ...
    }
    another car: {
        num 1: comment,
        num 2: comment,
        ...
    }
}
*/


const engineMap = {
    honda_nsx_gt3_evo: {
        name: "NSX EVO",
        1: "渐进",
        2: "Linear",
        3: "激进",
        4: "非常激进",
        5: "雨天",
        6: "雨天渐进",
        7: "低功率渐进",
        8: "安全车"
    },
    mclaren_650s_gt3: {
        name: "MCL 650",
        1: "最高功率",
        2: "稍慢省油",
        3: "稍慢",
        4: "低功率更省油",
        5: "湿地标准",
        6: "湿地省油",
        7: "湿地渐进",
        8: "湿地渐进省油",
        9: "安全车"
    },
    mclaren_720s_gt3_evo: {
        name: "MCL 720 Evo",
        1: "排位模式",
        2: "正赛模式",
        3: "正赛 渐进",
        4: "低功率线性",
        5: "更低功率",
        6: "最小功率",
        7: "-高温散热-",
        8: "湿地排位",
        9: "湿地低功率",
        10: "雨天排位",
        11: "雨天正赛",
        12: "雨天渐进",
        13: "安全车"
    },
    lamborghini_huracan_gt3_evo2: {
        name: "Huracan EVO 2",
        1: "最高功率",
        2: "标准 1",
        3: "标准 2",
        4: "省油标准 2",
        5: "湿地最快",
        6: "湿地 1",
        7: "湿地 2",
        8: "安全车"
    },
    audi_r8_lms_evo_ii: {
        name: "R8 Evo 2",
        1: "最高功率",
        2: "标准 1",
        3: "标准 2",
        4: "省油标准 2",
        5: "湿地最快",
        6: "湿地 1",
        7: "湿地 2",
        8: "安全车"
    },
    ford_mustang_gt3: {
        name: "Mustang GT3",
        1: "渐进",
        2: "Linear",
        3: "激进",
        4: "非常激进"},

    bmw_m4_gt3:{
        /**
         * MW – M4 GT3 and M6 GT3:
            1 – Dry track, most power and fuel use, aggressive throttle map
            2 – Dry track, high power, normal fuel use, linear throttle map
            3 – Dry track, high power, normal fuel use, lightly progressive throttle map
            4 – Engineering map, very low power, do not use
            5 – Safety car map, least power and fuel use
            6 – Wet track, high power, normal fuel use, lightly wet throttle map
            7 – Wet track, normal power, lower fuel use, wet throttle map one
            8 – Wet track, normal power, lower fuel use, wet throttle map two.
         */
        name: "M4 GT3",
        1: "干地排位",
        2: "干地正赛",
        3: "干地渐进",
        4: "工程模式",
        5: "安全车",
        6: "湿地排位",
        7: "湿地正赛 1",
        8: "湿地正赛 2",
        9: "TBD",
        10: "TBD"

    },

    bmw_m6_gt3:{
        /**
         * MW – M4 GT3 and M6 GT3:
            1 – Dry track, most power and fuel use, aggressive throttle map
            2 – Dry track, high power, normal fuel use, linear throttle map
            3 – Dry track, high power, normal fuel use, lightly progressive throttle map
            4 – Engineering map, very low power, do not use
            5 – Safety car map, least power and fuel use
            6 – Wet track, high power, normal fuel use, lightly wet throttle map
            7 – Wet track, normal power, lower fuel use, wet throttle map one
            8 – Wet track, normal power, lower fuel use, wet throttle map two.
         */
        name: "M6 GT3",
        1: "干地排位",
        2: "干地正赛",
        3: "干地渐进",
        4: "工程模式",
        5: "安全车",
        6: "湿地排位",
        7: "湿地正赛 1",
        8: "湿地正赛 2"

    }
}
