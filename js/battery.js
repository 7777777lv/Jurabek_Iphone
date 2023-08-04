let batteryPromise = navigator.getBattery();
batteryPromise.then(batteryCallback);

function batteryCallback(batteryObject) {
  printBatteryStatus(batteryObject);
}

function printBatteryStatus(batteryObject) {
  batteryLevel.textContent = batteryObject.level * 100 + "%";
  console.log(`Is this device charging: ${batteryObject.charging}`);
  console.log(`Battery level is: ${batteryObject.level * 100 + "%"}`);
}
