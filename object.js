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
    bands : {
        speed_wb_2_5g : 150,
        speed_wb_5g : 1000
    },
    wifiBands: function (wb_2_5g, wb_5g) {
        this.bands.speed_wb_2_5g = wb_2_5g
        this.bands.speed_wb_5g = wb_5g
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

console.log("2.5g speed before: ", laptop.bands.speed_wb_2_5g )
laptop.wifiBands(200,10000)
console.log("2.5g speed after: ", laptop.bands.speed_wb_2_5g )
console.log("5g speed after: ", laptop.bands.speed_wb_5g )
