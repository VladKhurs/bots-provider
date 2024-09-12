const TRIAL_TARIF_LIMITS = [
  {
    name: 'Количество сотрудников',
    value: '5',
  },
  {
    name: 'Количество менеджеров',
    value: '1',
  },
  {
    name: 'Настройка оформления',
    value: 'Без настройки оформления',
  },
  {
    name: 'Число списков при работе с виртуальной валютой',
    value: '5',
  },
]

const BASIC_TARIF_FUNCTIONS = [
  {
    name: 'Оповещение',
    description: 'Индивидуальная и/или массовая рассылка важной информации со сбором короткой реакции',
  },
  {
    name: 'Приятель-справочник',
    description: 'Бот поможет вашим сотрудникам ориентироваться на новом месте. Подскажет о важных правилах, местах, возможностях',
  },
]

const EXTRA_FUNCTIONS = [
  {
    price: 100,
    name: 'Приятель-помощник',
    description: 'Бот поможет вашим сотрудникам ориентироваться на новом месте. Подскажет о важных правилах, местах, возможностях. Проследит, что бы сотрудник не забыл о важных моментах',
    tarifId: 2,
  },
  {
    price: 100,
    name: 'Внутренняя валюта',
    description: 'Каждый сотрудник получает личный счет и возможность зарабатывать валюту и тратить ее во внутреннем магазине',
    tarifId: 2,
  },
  {
    price: 100,
    name: 'Наставник',
    description: 'Бот поможет установить связь между новым сотрудником и его наставником, напомнит вовремя о контрольных точках и соберет обратную связь',
    tarifId: 2,
  },
]

const TARITFS = [
  {
    name: 'Пробный',
    description: 'Пробный тариф позволяет увидеть возможности бота бесплатно',
    price: 0,
    period: 30, // дней
    limits: JSON.stringify(TRIAL_TARIF_LIMITS),
    functions: null,
    extraFunctions: null,
  },
  {
    name: 'Базовый',
    description: 'Базовый тариф - полноценная система, позволяющая пользоваться ботами по максимуму',
    price: 100,
    period: 30, // дней
    limits: null,
    functions: JSON.stringify(BASIC_TARIF_FUNCTIONS),
    extraFunctions: JSON.stringify(EXTRA_FUNCTIONS),
  }
]

const ADMINS = [
  {
    login: 'root',
    password: 'root',
  },
  {
    login: 'admin',
    password: 'admin',
  }
]

module.exports = {
  TARITFS,
  TRIAL_TARIF_LIMITS,
  BASIC_TARIF_FUNCTIONS,
  EXTRA_FUNCTIONS,
  ADMINS,
}
