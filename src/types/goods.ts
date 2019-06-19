
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