import { FC, useMemo, useState } from 'react'

interface Props {}

/**
 * MockTest
 *
 * @param {Props} { }
 */
// eslint-disable-next-line no-empty-pattern
export const MockTest: FC<Props> = ({}: Props) => {
  const [, reload] = useState({})
  const value = useMemo(() => {
    return 'Before'
  }, [])
  return (
    <div>
      <button onClick={() => reload({})}>{value}</button>
    </div>
  )
}
