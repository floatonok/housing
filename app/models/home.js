import DS from 'ember-data'

export default DS.Model.extend({
  size: DS.attr(),
  color: DS.attr(),
  users: DS.attr()
  // users: DS.hasMany('user'),
  // section_grids: DS.hasMany('section_grid')
})
