export interface MenuItem {
  name: string
  description: string
  price: number
  badge?: string
  veg?: boolean
  image?: string
}

export interface MenuCategory {
  id: string
  title: string
  subtitle: string
  items: MenuItem[]
}

/*
 * ВНИМАНИЕ (демо): фотографии — заглушки со стоков.
 * На боевом сайте заменить на реальные снимки блюд заведения.
 */
const menu: MenuCategory[] = [
  {
    id: 'pies',
    title: 'Осетинские пироги',
    subtitle: 'Тесто тонкое, начинки — щедрые. Печём на заказ к вашему приходу.',
    items: [
      {
        name: 'Уалибах',
        description: 'Классический пирог с молодым осетинским сыром. Тот самый вкус, с которого всё начинается.',
        price: 380,
        badge: 'Хит',
        veg: true,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
      },
      {
        name: 'Фыдджын',
        description: 'Пирог с рубленой говядиной, луком и специями. Сытный, ароматный, по старинному рецепту.',
        price: 520,
        badge: 'Фирменный',
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
      },
      {
        name: 'Картофджын',
        description: 'С картофелем и сыром — нежный, тает во рту. Любимец и детей, и взрослых.',
        price: 360,
        veg: true,
      },
      {
        name: 'Цахараджын',
        description: 'Со свекольной ботвой и сыром. Лёгкий, травянистый, по-настоящему деревенский.',
        price: 390,
        veg: true,
      },
      {
        name: 'Давонджын',
        description: 'С дикой черемшой и сыром. Сезонный пирог с ярким горным характером.',
        price: 410,
        veg: true,
        badge: 'Сезон',
      },
      {
        name: 'Насджын',
        description: 'С тыквой — чуть сладковатый, тёплый по настроению. Осенняя классика.',
        price: 370,
        veg: true,
      },
    ],
  },
  {
    id: 'hot',
    title: 'Горячее',
    subtitle: 'Готовим на открытом огне и в печи. Мясо — местное, соусы — домашние.',
    items: [
      {
        name: 'Шашлык из баранины',
        description: 'Маринуем по-горски, жарим на углях. Подаём с луком, лавашом и соусом цахдон.',
        price: 690,
        badge: 'Хит',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      },
      {
        name: 'Лывжа из курицы',
        description: 'Тушёная курица в наваристом соусе с чесноком и зеленью. Подаём с горячим пирогом.',
        price: 540,
        image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80',
      },
      {
        name: 'Дзыкка',
        description: 'Традиционное блюдо из свежего сыра и сметаны, томлённое до бархатной текстуры.',
        price: 420,
        veg: true,
        badge: 'Традиция',
      },
      {
        name: 'Отварная говядина с цахдоном',
        description: 'Нежная говядина с фирменным чесночно-сметанным соусом. Просто и безупречно.',
        price: 610,
      },
    ],
  },
  {
    id: 'starters',
    title: 'Закуски',
    subtitle: 'Чтобы начать неспешно и по-домашнему.',
    items: [
      {
        name: 'Осетинский сыр (цыхт)',
        description: 'Домашний рассольный сыр собственного посола. Подаём с зеленью и горным мёдом.',
        price: 290,
        veg: true,
        image: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&q=80',
      },
      {
        name: 'Соус цахдон',
        description: 'Сметана, чеснок, острый перец и травы. Идеален к мясу и пирогам.',
        price: 150,
        veg: true,
      },
      {
        name: 'Домашние соленья',
        description: 'Черемша, огурцы, помидоры и капуста по бабушкиным рецептам.',
        price: 260,
        veg: true,
      },
      {
        name: 'Горская тарелка',
        description: 'Ассорти: сыр, зелень, соленья и лаваш. Для компании и долгого разговора.',
        price: 480,
        veg: true,
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Напитки',
    subtitle: 'Своё, домашнее, без спешки.',
    items: [
      {
        name: 'Осетинское пиво (домашнее)',
        description: 'Тёмное, солодовое, по семейному рецепту. Главный напиток осетинского застолья.',
        price: 250,
        badge: 'Традиция',
      },
      {
        name: 'Уæрас',
        description: 'Лёгкий хлебный напиток домашнего брожения. Освежает в жару.',
        price: 180,
        veg: true,
      },
      {
        name: 'Горный травяной чай',
        description: 'Сбор кавказских трав: чабрец, душица, мята. Подаём в чайнике на компанию.',
        price: 320,
        veg: true,
      },
      {
        name: 'Компот из диких ягод',
        description: 'Из горных ягод и фруктов. Тёплый зимой, холодный летом.',
        price: 190,
        veg: true,
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Десерты',
    subtitle: 'Сладкое окончание вечера.',
    items: [
      {
        name: 'Халва домашняя',
        description: 'Из обжаренной муки, масла и мёда. Плотная, тёплая, как у бабушки.',
        price: 220,
        veg: true,
      },
      {
        name: 'Груши в медовом сиропе',
        description: 'Томлёные груши с горным мёдом и грецким орехом.',
        price: 280,
        veg: true,
      },
    ],
  },
]

export function useMenu() {
  const getMenu = (): MenuCategory[] => menu

  const getFeatured = (): MenuItem[] =>
    menu
      .flatMap((c) => c.items)
      .filter((i) => i.image)
      .slice(0, 4)

  return { getMenu, getFeatured }
}
