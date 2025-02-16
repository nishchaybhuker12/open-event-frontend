import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import ModelBase from 'open-event-frontend/models/base';

export default ModelBase.extend({

  /**
   * Attributes
   */
  sameAsBuyer                 : attr('boolean', { defaultValue: false }),
  city                        : attr('string'),
  firstname                   : attr('string'),
  lastname                    : attr('string'),
  isCheckedIn                 : attr('boolean', { defaultValue: false }),
  checkinTimes                : attr('string'),
  checkoutTimes               : attr('string'),
  state                       : attr('string'),
  address                     : attr('string'),
  pdfUrl                      : attr('string'),
  country                     : attr('string'),
  email                       : attr('string'),
  jobTitle                    : attr('string'),
  phone                       : attr('string'),
  company                     : attr('string'),
  taxBusinessInfo             : attr('string'),
  billingAddress              : attr('string'),
  homeAddress                 : attr('string'),
  shippingAddress             : attr('string'),
  workAddress                 : attr('string'),
  workPhone                   : attr('string'),
  website                     : attr('string'),
  blog                        : attr('string'),
  twitter                     : attr('string'),
  facebook                    : attr('string'),
  github                      : attr('string'),
  instagram                   : attr('string'),
  linkedin                    : attr('string'),
  gender                      : attr('string'),
  ageGroup                    : attr('string'),
  acceptReceiveEmails         : attr('boolean', { defaultValue: true }),
  acceptVideoRecording        : attr('boolean', { defaultValue: true }),
  acceptShareDetails          : attr('boolean', { defaultValue: true }),
  birthDate                   : attr('moment'),
  complexFieldValues          : attr(),
  is_consent_of_refund_policy : attr('boolean', { defaultValue: false }),
  native_language             : attr('string'),
  fluent_language             : attr('string'),
  home_wiki                   : attr('string'),
  is_consent_form_field       : attr('boolean', { defaultValue: false }),
  is_consent_form_field_photo : attr('boolean', { defaultValue: false }),
  is_consent_form_field_email : attr('boolean', { defaultValue: false }),
  wiki_scholarship            : attr('string'),

  /**
   * Relationships
   */
  event  : belongsTo('event'),
  order  : belongsTo('order'),
  ticket : belongsTo('ticket'),
  user   : belongsTo('user'),

  ready() {
    if (!this.complexFieldValues) {
      this.complexFieldValues = {};
    }
  }
});
