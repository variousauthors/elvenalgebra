import { useState } from 'react';
import { isNil } from 'ramda';

interface IPublishProps<TProps> {
  onPublish: (fields: TProps) => void
}

export const useDraft = <TProps>(props: TProps & IPublishProps<TProps>) => {
  const [stale, setStale] = useState(false)
  const [draft, setDraft] = useState<TProps>({ ...props })

  if (stale) {
    resetDraft(props)
  }

  return { draft, update, publish }

  function resetDraft(props: TProps) {
    setStale(false)
    setDraft({ ...props })
  }

  function update(change: Partial<TProps>) {
    setDraft({
      ...draft,
      ...change,
    })
  }

  function publish() {
    if (isNil(props.onPublish)) return

    setStale(true)

    props.onPublish(draft)
  }
}