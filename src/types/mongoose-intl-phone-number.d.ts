declare module "mongoose-intl-phone-number" {
  import { MongoosePlugin, Schema, SchemaTypeOpts } from "mongoose";

  interface PhoneNumberOptions {
    phoneNumberField: string;
    hook: "validate" | "save" | "update";
    countryCodeField: string;
    message: string;
  }

  function intlPhoneNumber(
    schema: Schema,
    options: PhoneNumberOptions
  ): MongoosePlugin;

  namespace intlPhoneNumber {}

  export = intlPhoneNumber;
}
