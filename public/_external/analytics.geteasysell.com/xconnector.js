(function () {
  const lockerOptionName = new URL(document.currentScript.src).searchParams.get('lockerOptionName');
  let xConnectorButton = null;
  const existCondition = setInterval(() => {
    xConnectorButton = document.querySelector('.es-xconnector,button.xconnector');
    if (xConnectorButton) {
      clearInterval(existCondition);
      addXConnectorEventListener(xConnectorButton);
      createLockerDiv();
      const selectedShippingOption = document.querySelector('.shipping-container .es-radio:checked')?.closest('.shipping-label')?.textContent;
      window.es_hook_shipping_change({ name: selectedShippingOption });
    }
  }, 200);

  function addXConnectorEventListener(button) {
    button.addEventListener('click', () => {
      XCONNECTORPICKUP.Form.widgetContext = "thank-you";
      XCONNECTORPICKUP.Form.showPopup();
      XCONNECTORPICKUP.Form.onResult(function (location) {
        window.ES_ADDITIONAL_DETAILS = {
          "LocationId": {
            title: "LocationId",
            value: location.id,
          },
          "ConnectorId": {
            title: "ConnectorId",
            value: location.merchantConnectorId,
          },
          "ConnectorType": {
            title: "ConnectorType",
            value: location.connectorType,
          },
          "LocationName": {
            title: "LocationName",
            value: location.name,
          },
        };
        document.querySelector('.es-xconnector-locker').style.display = 'block';
        document.querySelector('.es-xconnector-title').textContent = location.name;
        document.querySelector('.es-xconnector-description').textContent = location.address1;
        return false;
      });
    });
  }

  function createLockerDiv() {
    const lockerDiv = document.createElement('div');
    lockerDiv.className = 'es-locker-div';
    lockerDiv.innerHTML = `
      <div class="es-xconnector-locker" style="display: none; text-align: center; padding: 8px; border: 1px solid #e0e0e0; border-radius: 4px; margin-top: 8px;">
        <div class="es-xconnector-title" style="font-weight: 600;"></div>
        <div class="es-xconnector-description" style="color: #666; font-size: 0.9em;"></div>
      </div>
    `;
    xConnectorButton.closest('.es-group').appendChild(lockerDiv);
  }
  let isLockerOption = false;
  window.es_hook_shipping_change = (option) => {
    isLockerOption = option.name === lockerOptionName || option.xconnector;
    window.ES_IS_LOCKER_OPTION = isLockerOption;
    xConnectorButton.closest('.es-group').style.display = isLockerOption ? 'block' : 'none';
    if (window.ES_DISABLE_COD_LOCKER === true)
      document.getElementById('es-form-button').disabled = isLockerOption;
  }
  const submitHook = (data) => {
    if (!data.ConnectorId && isLockerOption) {
      const message = window.ES_XCONNECTOR_ERROR_MESSAGE || 'Vă rugăm să selectați mai întâi un dulap';
      alert(message);
      throw new Error('block');
    }
  }
  window.es_hook_before_submit = submitHook;
  window.es_hook_before_checkout = submitHook;
})();
