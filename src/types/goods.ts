
export enum GoodsType {
  NONE,
  MARBLE,
  STEEL,
  WOOD,
  CRYSTAL,
  SCROLLS,
  SILK,
  ELIXIR,
  DUST,
  GEMS,
}

export const TIER_1_GOODS = [GoodsType.MARBLE, GoodsType.STEEL, GoodsType.WOOD]
export const TIER_2_GOODS = [GoodsType.CRYSTAL, GoodsType.SCROLLS, GoodsType.SILK]
export const TIER_3_GOODS = [GoodsType.ELIXIR, GoodsType.DUST, GoodsType.GEMS]

export const GoodsTypeNames: { [key in GoodsType]: string } = {
  [GoodsType.NONE]: 'None',
  [GoodsType.MARBLE]: 'Marble',
  [GoodsType.STEEL]: 'Steel',
  [GoodsType.WOOD]: 'Wood',
  [GoodsType.CRYSTAL]: 'Crystal',
  [GoodsType.SCROLLS]: 'Scrolls',
  [GoodsType.SILK]: 'Silk',
  [GoodsType.ELIXIR]: 'Elixir',
  [GoodsType.DUST]: 'Dust',
  [GoodsType.GEMS]: 'Gems',
}

export const GoodsTypeByName = (type: string) => {
  switch (type) {
    case GoodsTypeNames[GoodsType.NONE]: return GoodsType.NONE
    case GoodsTypeNames[GoodsType.MARBLE]: return GoodsType.MARBLE
    case GoodsTypeNames[GoodsType.STEEL]: return GoodsType.STEEL
    case GoodsTypeNames[GoodsType.WOOD]: return GoodsType.WOOD
    case GoodsTypeNames[GoodsType.CRYSTAL]: return GoodsType.CRYSTAL
    case GoodsTypeNames[GoodsType.SCROLLS]: return GoodsType.SCROLLS
    case GoodsTypeNames[GoodsType.SILK]: return GoodsType.SILK
    case GoodsTypeNames[GoodsType.ELIXIR]: return GoodsType.ELIXIR
    case GoodsTypeNames[GoodsType.DUST]: return GoodsType.DUST
    case GoodsTypeNames[GoodsType.GEMS]: return GoodsType.GEMS
    default: throw new Error(`${type} is not a valid type of goods`)
  }
}