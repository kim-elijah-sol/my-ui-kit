import { Button, Flex } from '@ui-kit/ui';

const App = () => {
  return (
    <div
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
        >
          <Button>Primary Button</Button>
          <Button variant='border'>Border Button</Button>
          <Button variant='dashed'>Dashed Button</Button>
          <Button variant='text'>Text Button</Button>
          <Button variant='link'>Link Button</Button>

          <div css={{ flexBasis: '100%', height: 0 }} />

          <Button disabled>Primary Button</Button>
          <Button variant='border' disabled>
            Border Button
          </Button>
          <Button variant='dashed' disabled>
            Dashed Button
          </Button>
          <Button variant='text' disabled>
            Text Button
          </Button>
          <Button variant='link' disabled>
            Link Button
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default App;
