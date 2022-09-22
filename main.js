const SCAN_OPTIONS = {
    acceptAllAdvertisements: true,
    keepRepeatedDevices: true
};

function startDeviceScanner() {

    navigator.bluetooth.requestLEScan(SCAN_OPTIONS)
        .then(scanner => {

            console.log(scanner.active);

            navigator.bluetooth.addEventListener('advertisementreceived', event => {

                /* Display device data */
                let deviceData = event.device;

                if (document.getElementById(deviceData.id)) {
                    //update the device data displayed
                    updataDeviceData(deviceData);

                } else {
                    //insert device data
                    insertDeviceData(deviceData);
                }
            });

    })
        .catch(error => { console.log(error); });

}
