import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [nickname, setNickname] = useState('YourNickname');
  const [avatarUrl, setAvatarUrl] = useState('https://cdn.poehali.dev/projects/35eb013e-3a3e-4741-ab6c-1497ceaecbb9/files/25ce4e88-1961-43a5-9653-2c5d8b4f5ffc.jpg');
  const [telegramLink, setTelegramLink] = useState('');
  const [discordLink, setDiscordLink] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8 animate-fade-in">
        
        <Card className="bg-card/50 backdrop-blur-xl border-border/50 p-8 shadow-2xl animate-scale-in">
          <div className="flex flex-col items-center space-y-6">
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <Avatar className="relative h-32 w-32 border-4 border-primary/50">
                <AvatarImage src={avatarUrl} alt={nickname} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-3xl font-bold">
                  {nickname.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {nickname}
              </h1>
              <p className="text-muted-foreground">Мой личный профиль</p>
            </div>

            {!isEditing ? (
              <Button 
                onClick={() => setIsEditing(true)}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
              >
                <Icon name="Edit" size={16} className="mr-2" />
                Редактировать профиль
              </Button>
            ) : (
              <div className="w-full space-y-4 animate-fade-in">
                <div className="space-y-2">
                  <Label htmlFor="nickname">Никнейм</Label>
                  <Input 
                    id="nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="avatar">URL аватара</Label>
                  <Input 
                    id="avatar"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    placeholder="https://..."
                  />
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={handleSave}
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    <Icon name="Check" size={16} className="mr-2" />
                    Сохранить
                  </Button>
                  <Button 
                    onClick={() => setIsEditing(false)}
                    variant="outline"
                    className="flex-1 border-border/50 hover:bg-muted/50"
                  >
                    Отмена
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="group bg-card/50 backdrop-blur-xl border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 cursor-pointer animate-scale-in">
            <a 
              href={telegramLink || '#'} 
              target={telegramLink ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="flex items-center space-x-4"
            >
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#0088cc] to-[#229ED9] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="Send" size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  Telegram
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                {isEditing ? (
                  <Input 
                    value={telegramLink}
                    onChange={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setTelegramLink(e.target.value);
                    }}
                    onClick={(e) => e.preventDefault()}
                    placeholder="t.me/username"
                    className="mt-1 bg-background/50 border-border/50 h-8 text-sm"
                  />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {telegramLink || 'Добавить ссылку'}
                  </p>
                )}
              </div>
            </a>
          </Card>

          <Card className="group bg-card/50 backdrop-blur-xl border-border/50 p-6 hover:border-[#5865F2]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5865F2]/20 cursor-pointer animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <a 
              href={discordLink || '#'} 
              target={discordLink ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="flex items-center space-x-4"
            >
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#5865F2] to-[#7289DA] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="MessageSquare" size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  Discord
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                {isEditing ? (
                  <Input 
                    value={discordLink}
                    onChange={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setDiscordLink(e.target.value);
                    }}
                    onClick={(e) => e.preventDefault()}
                    placeholder="discord.gg/..."
                    className="mt-1 bg-background/50 border-border/50 h-8 text-sm"
                  />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {discordLink || 'Добавить ссылку'}
                  </p>
                )}
              </div>
            </a>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Index;