import { useDerivedStats } from '../../../hooks/useDerivedStats';
import { IEventBuilding } from '../../../types';
import { calculateEventBuildingStats } from '../helpers';

export const useEventBuildingStats = (props: IEventBuilding) => {
  const derivedStats = useDerivedStats()

  return calculateEventBuildingStats(props, derivedStats)
}
