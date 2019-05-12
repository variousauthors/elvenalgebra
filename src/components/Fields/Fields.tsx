import { useState } from 'react';

export function useDraft<TProps>(props: TProps) {
  const [stale, setStale] = useState(false)
  const [draft, updateDraft] = useState({ ...props })

  if (stale) {
    resetDraft(props)
  }

  return { draft, onChange, onPublish: () => setStale(true) }

  function resetDraft(props: TProps) {
    setStale(false)
    updateDraft({ ...props })
  }

  function onChange(change: Partial<TProps>) {
    updateDraft({
      ...draft,
      ...change,
    })
  }
}