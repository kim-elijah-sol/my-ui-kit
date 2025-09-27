import { Button } from '@ui-kit/ui';

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
        <div
          css={{
            padding: 12,
            border: '1px solid #DDD',
            borderRadius: '0.75rem',
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <Button>Button</Button>
          <Button variant='border'>Button</Button>
          <Button variant='dashed'>Button</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
