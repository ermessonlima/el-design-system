import { colors } from '@el-ui/tokens/src'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([name, value]) => {
    return (
      <div
        key={name}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          backgroundColor: value,
          fontFamily: 'monospace',
          color: getContrast(value, '#fff') > 3.5 ? '#fff' : '#000',
        }}
      >
        <strong>{name}</strong>
        <span>{value}</span>
      </div>
    )
  })
}
