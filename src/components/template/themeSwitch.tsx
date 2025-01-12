import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { SunIcon } from '@heroicons/react/24/solid'
import { useLocalStorage } from 'usehooks-ts'

function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const [enabled, setEnabled] = useState(theme == 'light')

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? 'light' : 'dark')
    setEnabled(enabled)
  }

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleThemeChange}
      className={classNames(
        enabled ? 'bg-gray-400' : 'bg-yellow-600',
        'relative inline-flex h-8 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out mr-5'
      )}
    >
      <SunIcon className={classNames('h-5 w-5 '+ enabled ? 'text-gray-600' : 'text-gray-400' )} />
    </Switch>
  )
}

export default ThemeSwitch

