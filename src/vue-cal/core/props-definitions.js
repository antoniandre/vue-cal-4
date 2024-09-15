export const minutesInADay = 24 * 60 // Don't do the maths every time.

export const props = {
  // HANDLED:
  clickToNavigate: { type: Boolean, default: undefined }, // Setting to false will force it off on date-picker.
  dark: { type: Boolean, default: false },
  datePicker: { type: Boolean, default: false }, // Shorthand for xs: true, views: [month, year, years], clickToNavigate: true.
  datePrototypes: { type: Boolean, default: true },
  events: { type: Array, default: () => [] },
  hideWeekdays: { type: Array, default: () => [] }, // An array of strings. Possible values: 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'.
  hideWeekends: { type: Boolean, default: false },
  locale: { type: [String, Object], default: 'en-us' },
  selectedDate: { type: [String, Date], default: '' },
  sm: { type: Boolean, default: false },
  splitDays: { type: Array, default: () => [] },
  startWeekOnSunday: { type: Boolean, default: false },
  time: { type: Boolean, default: true },
  timeCellHeight: { type: Number, default: 40 }, // In pixels.
  timeFormat: { type: String, default: '' },
  timeFrom: { type: Number, default: 0 }, // In minutes.
  timeStep: { type: Number, default: 60 }, // In minutes.
  timeTo: { type: Number, default: minutesInADay }, // In minutes.
  titleBar: { type: Boolean, default: true },
  todayButton: { type: Boolean, default: true },
  transitions: { type: Boolean, default: true },
  twelveHour: { type: Boolean, default: false },
  view: { type: String, default: 'week' },
  viewDate: { type: [String, Date], default: '' }, // The view will automatically set its start and end to present this date.
  // Only available for month and day views, this will shift the start of the view (left or right) by x days (signed integer).
  viewDayOffset: { type: Number, default: 0 },
  views: { type: [Array, Object], default: ['day', 'days', 'week', 'month', 'year', 'years'] },
  viewsBar: { type: Boolean, default: true },
  watchRealTime: { type: Boolean, default: false }, // More expensive, so only trigger on demand.
  xs: { type: Boolean, default: false },

  // TODO NEXT:
  dblclickToNavigate: { type: Boolean, default: true },
  disableDays: { type: Array, default: () => [] },
  specialHours: { type: Object, default: () => ({}) },

  // TODO:
  cellClickHold: { type: Boolean, default: true },
  cellContextmenu: { type: Boolean, default: false },
  dragToCreateEvent: { type: Boolean, default: true },
  // Start a drag creation after dragging a certain amount of pixels.
  // This prevents drag creation by mistake when you want to navigate.
  dragToCreateThreshold: { type: Number, default: 15 },
  editableEvents: { type: [Boolean, Object], default: false },
  eventsCountOnYearView: { type: Boolean, default: false },
  eventsOnMonthView: { type: [Boolean, String], default: false },
  maxDate: { type: [String, Date], default: '' },
  minDate: { type: [String, Date], default: '' },
  minEventWidth: { type: Number, default: 0 },
  minSplitWidth: { type: Number, default: 0 },
  onEventClick: { type: [Function, null], default: null },
  onEventCreate: { type: [Function, null], default: null },
  onEventDblclick: { type: [Function, null], default: null },
  overlapsPerTimeStep: { type: Boolean, default: false },
  resizeX: { type: Boolean, default: false },
  showAllDayEvents: { type: [Boolean, String], default: false },
  showTimeInCells: { type: Boolean, default: false },
  showWeekNumbers: { type: [Boolean, String], default: false },
  snapToTime: { type: Number, default: 0 },
  stickySplitLabels: { type: Boolean, default: false }
}
