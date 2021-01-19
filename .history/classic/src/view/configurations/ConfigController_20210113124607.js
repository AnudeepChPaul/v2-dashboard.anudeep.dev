/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Dashboard.view.configurations.ConfigController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.dash-config-controller',


  addSubmitButton: function () {
    function () {
      const form = this.up('form').getForm();
      const rating = this.up('dash-config').down('rating');

      rating.getValue();

      console.log(form.getValues());
      console.log({
        ...form.getValues(),
        rating: rating.getValue()
      });
      rating.setValue(null);
      form.reset();
    }
  }
});