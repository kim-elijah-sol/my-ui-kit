import { Button, Flex, Input, Radio, Switch, Textarea } from '@ui-kit/ui';
import { useState } from 'react';

const App = () => {
  const [switchState, setSwitchState] = useState<boolean>(false);

  return (
    <Flex.Column
      gap={12}
      css={{
        padding: 16,
      }}
    >
      <div>
        <p
          css={{
            marginBottom: '1rem',
            fontWeight: 600,
            fontSize: '1.25rem',
          }}
        >
          Radio
        </p>
        <Flex.Column
          css={{
            padding: 12,
            border: '1px solid #DDD',
            borderRadius: '0.75rem',
          }}
          gap={{
            column: 16,
            row: 8,
          }}
          as='article'
        >
          <Radio id='radio-1' name='radio' />
          <Radio id='radio-2' name='radio' />
          <Radio defaultChecked id='radio-3' name='radio' disabled />
          <Radio name='radio' disabled />
        </Flex.Column>
      </div>

      <div>
        <p
          css={{
            marginBottom: '1rem',
            fontWeight: 600,
            fontSize: '1.25rem',
          }}
        >
          Switch
        </p>
        <Flex
          css={{
            padding: 12,
            border: '1px solid #DDD',
            borderRadius: '0.75rem',
          }}
          gap={{
            column: 16,
            row: 8,
          }}
          as='article'
          wrap
        >
          <Switch defaultChecked />
          <Switch
            defaultChecked
            checked={switchState}
            onChange={setSwitchState}
            id='_switch_id'
            name='_switch_name'
            className='_switch_class'
          />
          <div css={{ flexBasis: '100%', height: 0 }} />
          <Switch disabled />
          <Switch
            disabled
            checked
            style={{
              color: '#333',
            }}
          />
          <div css={{ flexBasis: '100%', height: 0 }} />
          <Switch.Root id='root-switch'>
            <Switch.Label>On/Off</Switch.Label>
            <Switch />
          </Switch.Root>
          <div css={{ flexBasis: '100%', height: 0 }} />
          <Switch.Root id='root-switch_1'>
            <Switch disabled checked />
            <Switch.Label>On/Off</Switch.Label>
          </Switch.Root>
          <Flex align='center' gap={8}>
            <Switch size='sm' />
            <Switch size='md' />
            <Switch size='lg' />
          </Flex>
        </Flex>
      </div>

      <div>
        <p
          css={{
            marginBottom: '1rem',
            fontWeight: 600,
            fontSize: '1.25rem',
          }}
        >
          Textarea
        </p>
        <Flex.Column
          css={{
            padding: 12,
            border: '1px solid #DDD',
            borderRadius: '0.75rem',
          }}
          gap={16}
          as='article'
        >
          <Textarea placeholder='내용을 입력' />
          <Textarea placeholder='내용을 입력' disabled />
          <Textarea variant='solid' placeholder='내용을 입력' />
          <Textarea variant='solid' placeholder='내용을 입력' disabled />
          <Textarea variant='bottom-border' placeholder='내용을 입력' />
          <Textarea
            variant='bottom-border'
            placeholder='내용을 입력'
            disabled
          />
        </Flex.Column>
      </div>

      <div>
        <p
          css={{
            marginBottom: '1rem',
            fontWeight: 600,
            fontSize: '1.25rem',
          }}
        >
          Button
        </p>
        <Flex
          css={{
            padding: 12,
            border: '1px solid #DDD',
            borderRadius: '0.75rem',
          }}
          wrap
          gap={{
            row: 12,
            column: '0.75rem',
          }}
          as='article'
        >
          <Button>Primary Button</Button>
          <Button variant='border'>Border Button</Button>
          <Button variant='dashed'>Dashed Button</Button>
          <Button variant='ghost'>Ghost Button</Button>
          <Button variant='link'>Link Button</Button>

          <div css={{ flexBasis: '100%', height: 0 }} />

          <Button disabled>Primary Button</Button>
          <Button variant='border' disabled>
            Border Button
          </Button>
          <Button variant='dashed' disabled>
            Dashed Button
          </Button>
          <Button variant='ghost' disabled>
            Ghost Button
          </Button>
          <Button variant='link' disabled>
            Link Button
          </Button>
        </Flex>
      </div>

      <div>
        <p
          css={{
            marginBottom: '1rem',
            fontWeight: 600,
            fontSize: '1.25rem',
          }}
        >
          Input
        </p>
        <Flex.Column
          css={{
            padding: 12,
            border: '1px solid #DDD',
            borderRadius: '0.75rem',
          }}
          gap={16}
          as='article'
        >
          <Input placeholder='아이디 입력' />
          <Input
            type='password'
            placeholder='비밀번호 입력 (blue Color)'
            color='blue'
          />
          <Input placeholder='비활성화 readOnly' readOnly />
          <Input placeholder='비활성화 disabled' disabled />

          <Input variant='solid' placeholder='아이디 입력' />
          <Input variant='solid' type='password' placeholder='비밀번호 입력' />
          <Input variant='solid' placeholder='비활성화 readOnly' readOnly />
          <Input variant='solid' placeholder='비활성화 disabled' disabled />

          <Input variant='bottom-border' placeholder='아이디 입력' />
          <Input
            variant='bottom-border'
            type='password'
            placeholder='비밀번호 입력 (blue Color)'
            color='blue'
          />
          <Input
            variant='bottom-border'
            placeholder='비활성화 readOnly'
            readOnly
          />
          <Input
            variant='bottom-border'
            placeholder='비활성화 disabled'
            disabled
          />

          <Input size='sm' />
          <Input size='lg' />
        </Flex.Column>
      </div>
    </Flex.Column>
  );
};

export default App;
