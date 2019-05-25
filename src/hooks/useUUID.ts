import { useState } from 'react';
import * as uuid from 'uuid'

export const useUUID = () => {
  const [value] = useState(uuid.v4())

  return value
}