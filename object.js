const desktop = {
    screen: {
        resolution: 1000,
        displaytype: "Led",
        touchable: false
    },
    pointDevice: "Wireless Mouse",
    ram: "32 GB",
    storage: "1 TB",
    wifi: false
}

const laptop = {
    screen: {
        resolution: 1080,
        displaytype: "LCD",
        touchable: true
    },
    pointDevice: "Trackpad",
    ram: "16 GB",
    storage: "512 gb",
    wifi: true,
    togglewifi: function (wifi_status) {
        this.wifi = wifi_status
    },
    wifiBands: function (wb_2_5g, wb_5g) {
        this.wb_2_5g = wb_2_5g
        this.wb_5g = wb_5g
    }
}

const phone = {
    screen: {
        resolution: 1080,
        displaytype: "Amlode",
        touchable: true
    },
    pointDevice: "Wireless Mouse",
    ram: "32 GB",
    storage: "1 TB",
    wifi: true
}

console.log("Desktop: ", desktop)
console.log("laptop: ", laptop)
console.log("phone: ", phone)