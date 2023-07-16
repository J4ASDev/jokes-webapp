import ThemeEnum from '../ts/enums/ThemeEnum'

const DARKMODE = {
  background: '#E5E5E5',
  tomato: '#FF9B79',
  orange: '#FFDC4F',
  yellow: '#FFFF60',
  green: '#52B640',
}

const LIGHTMODE = {
  background: '#292929',
  tomato: '#FF6347',
  orange: '#FFA500',
  yellow: '#FFFF00',
  green: '#008000'
}

function getTheme(mode: ThemeEnum): object {
  return {
    colors: mode === ThemeEnum.LIGHTMODE ? LIGHTMODE : DARKMODE
  }
}

export default getTheme
