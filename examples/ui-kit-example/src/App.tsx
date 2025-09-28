import { Button, Flex, Input } from '@ui-kit/ui';

const App = () => {
  return (
    <Flex
      direction='column'
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
        <Flex
          direction='column'
          css={{
            padding: 12,
            border: '1px solid #DDD',
            borderRadius: '0.75rem',
          }}
          gap={16}
          as='article'
        >
          <Input placeholder='아이디 입력' />
          <Input type='password' placeholder='비밀번호 입력' />
        </Flex>
      </div>
    </Flex>
  );
};

export default App;
