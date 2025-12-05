import { Button, Input, Radio, Switch, Textarea } from '@ui-kit/ui';
import { useState }                               from 'react';

const sectionTitleStyle = {
  marginBottom: '1rem',
  fontWeight: 600,
  fontSize: '1.25rem',
};

const sectionBoxStyle = {
  padding: 12,
  border: '1px solid #DDD',
  borderRadius: '0.75rem',
};

const dividerStyle = { flexBasis: '100%', height: 0 };

const columnStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
};

const rowStyle = {
  display: 'flex',
  flexDirection: 'row' as const,
};

const App = () => {
  const [switchState, setSwitchState] = useState<boolean>(false);

  return (
    <div style={{ ...columnStyle, gap: 12, padding: 16 }}>
      <div>
        <p style={sectionTitleStyle}>Radio</p>
        <article
          style={{
            ...columnStyle,
            ...sectionBoxStyle,
            columnGap: 16,
            rowGap: 8,
          }}
        >
          <Radio id="radio-1" name="radio" />
          <Radio id="radio-2" name="radio" color="blue" />
          <Radio
            defaultChecked
            id="radio-3"
            name="radio"
            color="blue"
            disabled
          />
          <Radio name="radio" disabled />
        </article>
      </div>

      <div>
        <p style={sectionTitleStyle}>Switch</p>
        <article
          style={{
            ...rowStyle,
            ...sectionBoxStyle,
            flexWrap: 'wrap',
            columnGap: 16,
            rowGap: 8,
          }}
        >
          <Switch defaultChecked />
          <Switch
            defaultChecked
            checked={switchState}
            onChange={setSwitchState}
            id="_switch_id"
            name="_switch_name"
            className="_switch_class"
          />
          <Switch color="blue" defaultChecked />
          <Switch color="blue" />
          <div style={dividerStyle} />
          <Switch disabled checked />
          <Switch
            disabled
            style={{
              color: '#333',
            }}
          />
          <Switch disabled checked color="blue" />
          <Switch disabled color="blue" />
          <div style={dividerStyle} />
          <div style={{ ...rowStyle, alignItems: 'center', gap: 8 }}>
            <Switch size="sm" />
            <Switch size="md" />
            <Switch size="lg" />
          </div>
        </article>
      </div>

      <div>
        <p style={sectionTitleStyle}>Textarea</p>
        <article style={{ ...columnStyle, ...sectionBoxStyle, gap: 16 }}>
          <Textarea placeholder="내용을 입력" />
          <Textarea placeholder="내용을 입력 (blue color)" color="blue" />
          <Textarea placeholder="내용을 입력" disabled />
          <Textarea variant="solid" placeholder="내용을 입력" />
          <Textarea
            variant="solid"
            placeholder="내용을 입력 (blue color)"
            color="blue"
          />
          <Textarea variant="solid" placeholder="내용을 입력" disabled />
          <Textarea variant="bottom-border" placeholder="내용을 입력" />
          <Textarea
            variant="bottom-border"
            placeholder="내용을 입력"
            disabled
          />
        </article>
      </div>

      <div>
        <p style={sectionTitleStyle}>Button</p>
        <article
          style={{
            ...rowStyle,
            ...sectionBoxStyle,
            flexWrap: 'wrap',
            rowGap: 12,
            columnGap: '0.75rem',
          }}
        >
          <Button>Primary Button</Button>
          <Button variant="border">Border Button</Button>
          <Button variant="dashed">Dashed Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>

          <div style={dividerStyle} />

          <Button disabled>Primary Button</Button>
          <Button variant="border" disabled>
            Border Button
          </Button>
          <Button variant="dashed" disabled>
            Dashed Button
          </Button>
          <Button variant="ghost" disabled>
            Ghost Button
          </Button>
          <Button variant="link" disabled>
            Link Button
          </Button>

          <div style={dividerStyle} />

          <div style={{ ...rowStyle, alignItems: 'center', gap: 8 }}>
            <Button size="sm">Small Button</Button>
            <Button>Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </article>
      </div>

      <div>
        <p style={sectionTitleStyle}>Input</p>
        <article style={{ ...columnStyle, ...sectionBoxStyle, gap: 16 }}>
          <Input placeholder="아이디 입력" />
          <Input
            type="password"
            placeholder="비밀번호 입력 (blue Color)"
            color="blue"
          />
          <Input placeholder="비활성화 readOnly" readOnly />
          <Input placeholder="비활성화 disabled" disabled />

          <Input variant="solid" placeholder="아이디 입력" />
          <Input
            variant="solid"
            type="password"
            placeholder="비밀번호 입력"
            color="blue"
          />
          <Input variant="solid" placeholder="비활성화 readOnly" readOnly />
          <Input variant="solid" placeholder="비활성화 disabled" disabled />

          <Input variant="bottom-border" placeholder="아이디 입력" />
          <Input
            variant="bottom-border"
            type="password"
            placeholder="비밀번호 입력 (blue Color)"
            color="blue"
          />
          <Input
            variant="bottom-border"
            placeholder="비활성화 readOnly"
            readOnly
          />
          <Input
            variant="bottom-border"
            placeholder="비활성화 disabled"
            disabled
          />

          <Input size="sm" />
          <Input size="lg" />
        </article>
      </div>
    </div>
  );
};

export default App;
