import * as React from 'react'
import { Tab, Tabs } from '@opencrvs/components/lib/interface'
import { IFormSection } from '../../forms'
import { injectIntl, InjectedIntlProps } from 'react-intl'

interface IFormTabProps {
  sections: IFormSection[]
  activeTabId: string
  onTabClick: (tabId: string) => void
}

function FormTabsComponent({
  sections,
  activeTabId,
  onTabClick,
  intl
}: IFormTabProps & InjectedIntlProps) {
  return (
    <Tabs>
      {sections.map(({ name, id }) => (
        <Tab
          id={`tab_${id}`}
          onClick={() => onTabClick(id)}
          key={id}
          active={activeTabId === id}
        >
          {intl.formatMessage(name)}
        </Tab>
      ))}
    </Tabs>
  )
}

export const FormTabs = injectIntl(FormTabsComponent)